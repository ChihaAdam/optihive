import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../../index.js";
import {
  mockProjectName,
  mockProjectDescription,
  mockDate,
} from "../mocks/mock-project.js";
import { mockUsername, mockEmail, mockPassword } from "../mocks/mock-user.js";

describe("project", () => {
  it("should create a new project", async () => {
    const registerResponse = await request(app)
      .post("/api/v1/users/register")
      .send({
        username: mockUsername().valid,
        email: mockEmail().valid,
        password: mockPassword().valid,
      });
    const token = registerResponse.body.token;
    const projectDetails = {
      projectName: mockProjectName(),
      projectDescription: mockProjectDescription(),
      deadline: mockDate(),
    };
    const response = await request(app)
      .post("/api/v1/projects/create")
      .set("Authorization", `Bearer ${token}`)
      .send(projectDetails);
    const getProjectResponse = await request(app)
      .get(`/api/v1/projects`)
      .set("Authorization", `Bearer ${token}`);
    const project = getProjectResponse.body.projects[0];
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("message");
    expect(getProjectResponse.status).toBe(200);
    expect(getProjectResponse.body).toHaveProperty("projects");
    expect(project.projectName).toBe(projectDetails.projectName);
    expect(project.projectDescription).toBe(projectDetails.projectDescription);
    expect(project.deadline).toBe(
      new Date(projectDetails.deadline).toISOString(),
    );
  });
});
