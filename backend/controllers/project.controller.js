import Project from "../model/project.model.js";
import Membership from "../model/membership.model.js";
import { getProjectByIdHelper } from "../helpers/project.helpers.js";
export const createProject = async (req, res, next) => {
  try {
    const { projectName, projectDescription, deadline } = req.projectDetails;
    const project = await Project.create({
      creatorId: req.userId,
      projectName,
      projectDescription,
      deadline: deadline,
    });
    await Membership.create({
      userId: req.userId,
      projectId: project._id,
      role: "project_manager",
    });
    return res.status(201).json({ message: "Project created successfully" });
  } catch (err) {
    next(err);
  }
};

export const getProjects = async (req, res, next) => {
  try {
    const userId = req.userId;
    const memberships = await Membership.find({ userId })
      .populate("projectId")
      .lean();
    const projects = memberships.map((membership) => {
      return {
        ...membership.projectId,
        joinedAt: membership.createdAt,
        projectCreatedAt: membership.projectId.createdAt,
        role: membership.role,
        invitationCode:
          membership.role === "project_manager"
            ? membership.projectId.invitationCode
            : null,
      };
    });
    return res.status(200).json({ projects });
  } catch (err) {
    next(err);
  }
};

export const joinProject = async (req, res, next) => {
  try {
    const invitationCode = req?.body?.invitationCode?.toString()?.trim();
    const userId = req.userId;
    if (!invitationCode) {
      const error = new Error("Invitation code is required");
      error.statusCode = 400;
      throw error;
    }
    const project = await Project.findOne({ invitationCode });
    if (!project) {
      const error = new Error("Project not found");
      error.statusCode = 404;
      throw error;
    }
    await Membership.create({
      userId,
      projectId: project._id,
      role: "member",
    });
    return res.status(201).json({ message: "Project joined successfully" });
  } catch (err) {
    next(err);
  }
};

export const getProjectById = async (req, res, next) => {
  try {
    const { projectId } = req.params;
    const { project, members } = await getProjectByIdHelper(projectId);
    if (!project) {
      const error = new Error("Project not found");
      error.statusCode = 404;
      throw error;
    }
    return res.status(200).json({ project, members });
  } catch (err) {
    next(err);
  }
};
