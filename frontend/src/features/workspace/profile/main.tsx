import getUserInfo from "@/shared/actions/getUserInfo";
import { H3Gradiant } from "@/shared/components/ui/title-gradiant/title-gradiant";
import UserCard from "./user-card";
import Role from "./role";
import ProjectAnalysis from "./projectAnalysis";
import EditRoleNameDialog from "./editRoleName/editRoleNameDialog";
import EditRoleDescriptionDialog from "./editRoleDescription/editRoleDescriptionDialog";
async function Main() {
  const user = await getUserInfo();
  return (
    <div className="flex flex-col gap-10 p-4">
      <div className="flex flex-col gap-2">
        <H3Gradiant>Profile</H3Gradiant>
        <p className="text-gray-500">Manage your profile information</p>
      </div>
      <div className="flex w-full gap-10 items-start">
        <div className="flex-1/4 flex flex-col gap-5">
          <UserCard
            username={user.username}
            email={user.email}
            avatar={user.avatar}
          />
          <EditRoleNameDialog />
          <EditRoleDescriptionDialog />
        </div>
        <div className="flex-3/4 flex flex-col gap-5">
          <Role
            roleName={user.roleName}
            roleDescription={user.roleDescription}
          />
          <ProjectAnalysis />
        </div>
      </div>
    </div>
  );
}

export default Main;
