import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../../index.js";
import { mockUsername, mockEmail, mockPassword } from "../mocks/mock-user.js";

describe("register", () => {
  it("should register a new user", async () => {
    const response = await request(app).post("/api/v1/users/register").send({
      username: mockUsername().valid,
      email: mockEmail().valid,
      password: mockPassword().valid,
    });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("token");
  });
  it("should not register a new user with invalid username", async () => {
    const response = await request(app).post("/api/v1/users/register").send({
      username: mockUsername().invalid,
      email: mockEmail().valid,
      password: mockPassword().valid,
    });
    expect(response.status).toBe(400);
  });
  it("should not register a new user with invalid email", async () => {
    const response = await request(app).post("/api/v1/users/register").send({
      username: mockUsername().valid,
      email: mockEmail().invalid,
      password: mockPassword().valid,
    });
    expect(response.status).toBe(400);
  });
  it("should not register a new user with invalid password", async () => {
    const response = await request(app).post("/api/v1/users/register").send({
      username: mockUsername().valid,
      email: mockEmail().valid,
      password: mockPassword().invalid,
    });
    expect(response.status).toBe(400);
  });
});
