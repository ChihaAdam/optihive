import { describe, it, expect, beforeAll } from "vitest";
import request from "supertest";
import app from "../../index.js";
import { mockUsername, mockEmail, mockPassword } from "../mocks/mock-user.js";
import {
  mockProjectName,
  mockProjectDescription,
  mockDate,
} from "../mocks/mock-project.js";
import {
  mockFeatureName,
  mockFeatureDescription,
} from "../mocks/mock-feature.js";
const mockUser1 = {
  username: mockUsername().valid,
  email: mockEmail().valid,
  password: mockPassword().valid,
};
const mockUser2 = {
  username: mockUsername().valid,
  email: mockEmail().valid,
  password: mockPassword().valid,
};
const mockProject = {
  projectName: mockProjectName(),
  projectDescription: mockProjectDescription(),
  deadline: mockDate(),
};
let token1;
let token2;
let projectId;

beforeAll(async () => {
  const registerResponse = await request(app)
    .post("/api/v1/users/register")
    .send(mockUser1);
  token1 = registerResponse.body.token;
  await request(app)
    .post("/api/v1/projects/create")
    .set("Authorization", `Bearer ${token1}`)
    .send(mockProject);
  const registerResponse2 = await request(app)
    .post("/api/v1/users/register")
    .send(mockUser2);
  token2 = registerResponse2.body.token;
  await request(app)
    .post("/api/v1/projects/join")
    .set("Authorization", `Bearer ${token2}`)
    .send({ projectId });
  const getProjectResponse = await request(app)
    .get("/api/v1/projects")
    .set("Authorization", `Bearer ${token1}`);
  projectId = getProjectResponse.body.projects[0]._id;
});

describe("feature", () => {
  it("should create a new feature", async () => {
    const response = await request(app)
      .post(`/api/v1/projects/features/${projectId}`)
      .set("Authorization", `Bearer ${token1}`)
      .send({
        featureName: mockFeatureName(),
        featureDescription: mockFeatureDescription(),
      });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("message");
  });
  it("should not create a new feature", async () => {
    const response = await request(app)
      .post(`/api/v1/projects/features/${projectId}`)
      .set("Authorization", `Bearer ${token2}`)
      .send({
        featureName: mockFeatureName(),
        featureDescription: mockFeatureDescription(),
      });
    expect(response.status).toBe(403);
  });
  it("should not create a new feature with invalid feature name", async () => {
    const response = await request(app)
      .post(`/api/v1/projects/features/${projectId}`)
      .set("Authorization", `Bearer ${token1}`)
      .send({
        featureName: "",
        featureDescription: mockFeatureDescription(),
      });
    expect(response.status).toBe(400);
  });
});
