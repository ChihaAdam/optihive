import Project from "../model/project.model.js";
import Membership from "../model/membership.model.js";
export const getProjectByIdHelper = async (projectId, role) => {
  const project = await Project.findById(projectId).lean();
  const memberships = await Membership.find({ projectId })
    .populate("userId")
    .lean();
  if (role !== "project_manager") {
    delete project.invitationCode;
  }
  const members = memberships.map((membership) => {
    delete membership.userId.password;
    return {
      ...membership.userId,
      role: membership.role,
    };
  });
  return { project, members };
};
