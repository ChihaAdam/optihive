import Project from "../model/project.model.js";
import Membership from "../model/membership.model.js";
export const getProjectByIdHelper = async (projectId) => {
  const project = await Project.findById(projectId).lean();
  const memberships = await Membership.find({ projectId })
    .populate("userId")
    .lean();
  const members = memberships.map((membership) => {
    return {
      ...membership.userId,
      role: membership.role,
    };
  });
  return { project, members };
};
