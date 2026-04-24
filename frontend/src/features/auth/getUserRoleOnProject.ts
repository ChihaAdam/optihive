import getProjectDetails from "../workspace/projects/project-details/getProjectDetails";
import getUserInfo from "@/shared/actions/getUserInfo";
type action =
  | "add task"
  | "update task"
  | "delete task"
  | "add feature"
  | "update feature"
  | "delete feature"
  | "admin page";
const permissions: Record<string, action[]> = {
  member: [],
  project_manager: [
    "add task",
    "update task",
    "delete task",
    "add feature",
    "update feature",
    "delete feature",
    "admin page",
  ],
};
export async function getUserRoleOnProject(projectId: string) {
  const project = await getProjectDetails(projectId);
  const user = await getUserInfo();
  const role = project.members.find(
    (member: any) => member._id === user._id,
  )?.role;
  return role as keyof typeof permissions;
}

export async function getUserPermissions(projectId: string) {
  const role = await getUserRoleOnProject(projectId);
  console.log(role);
  return permissions[role] as action[];
}

export async function hasPermission(permission: action, projectId: string) {
  const permissions = await getUserPermissions(projectId);
  return permissions.includes(permission);
}
