import { verifyToken } from "../helpers/token.helpers.js";
import Project from "../model/project.model.js";
import Membership from "../model/membership.model.js";
export const authMiddleware = (req, _res, next) => {
  try {
    const token = req.headers?.authorization?.split(" ")?.[1];
    if (!token) {
      const err = new Error("Unauthorized");
      err.statusCode = 401;
      throw err;
    }
    const decodedToken = verifyToken(token);
    req.userId = decodedToken.id?.toString();
    next();
  } catch (err) {
    next(err);
  }
};

export const isProjectMember = async (req, res, next) => {
  try {
    const { projectId } = req.params;
    const userId = req.userId;
    const project = await Project.findById(projectId);
    if (!project) {
      const err = new Error("Project not found");
      err.statusCode = 404;
      throw err;
    }
    const membership = await Membership.findOne({
      projectId,
      userId,
    });
    if (!membership) {
      const err = new Error("You are not a member of this project");
      err.statusCode = 403;
      throw err;
    }
    next();
  } catch (err) {
    next(err);
  }
};
export const isProjectManager = async (req, res, next) => {
  try {
    const { projectId } = req.params;
    const userId = req.userId;
    const project = await Project.findById(projectId);
    if (!project) {
      const err = new Error("Project not found");
      err.statusCode = 404;
      throw err;
    }
    const membership = await Membership.findOne({
      projectId,
      userId,
    });
    if (!membership) {
      const err = new Error("You are not a member of this project");
      err.statusCode = 403;
      throw err;
    }
    if (membership.role !== "project_manager") {
      const err = new Error("You are not a manager of this project");
      err.statusCode = 403;
      throw err;
    }
    next();
  } catch (err) {
    next(err);
  }
};
