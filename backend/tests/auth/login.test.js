import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../../index.js";
import { mockEmail, mockPassword, mockUsername } from "../mocks/mock-user.js";

describe("login", () => {
  it("should not login a not registered user", async () => {
    const response = await request(app).post("/api/v1/users/login").send({
      email: mockEmail().valid,
      password: mockPassword().valid,
    });
    expect(response.status).toBe(401);
  });
  it("should not login a user with invalid email", async () => {
    const response = await request(app).post("/api/v1/users/login").send({
      email: mockEmail().invalid,
      password: mockPassword().valid,
    });
    expect(response.status).toBe(400);
  });
  it("should not login a user with invalid password", async () => {
    const response = await request(app).post("/api/v1/users/login").send({
      email: mockEmail().valid,
      password: mockPassword().invalid,
    });
    expect(response.status).toBe(400);
  });
  it("should not login a user with empty email", async () => {
    const response = await request(app).post("/api/v1/users/login").send({
      email: "",
      password: mockPassword().valid,
    });
    expect(response.status).toBe(400);
  });
  it("should not login a user with empty password", async () => {
    const response = await request(app).post("/api/v1/users/login").send({
      email: mockEmail().valid,
      password: "",
    });
    expect(response.status).toBe(400);
  });
  it("should not login a user with undefined email", async () => {
    const response = await request(app).post("/api/v1/users/login").send({
      email: undefined,
      password: mockPassword().valid,
    });
    expect(response.status).toBe(400);
  });
  it("should not login a user with undefined password", async () => {
    const response = await request(app).post("/api/v1/users/login").send({
      email: mockEmail().valid,
      password: undefined,
    });
    expect(response.status).toBe(400);
  });
  it("should login a user with valid email and password", async () => {
    const email = mockEmail().valid;
    const password = mockPassword().valid;
    const username = mockUsername().valid;
    const response = await request(app).post("/api/v1/users/register").send({
      username,
      email,
      password,
    });
    const loginResponse = await request(app).post("/api/v1/users/login").send({
      email,
      password,
    });
    expect(loginResponse.status).toBe(200);
    expect(loginResponse.body).toHaveProperty("token");
  });
});
