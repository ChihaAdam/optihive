import getUserInfo from "@/shared/actions/getUserInfo";
import { H3Gradiant } from "@/shared/components/ui/title-gradiant/title-gradiant";
import UserCard from "./user-card";
import Role from "./role";
import ProjectAnalysis from "./projectAnalysis";
import Button from "@/shared/components/ui/button/button";
import { Pen } from "lucide-react";

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
          <Button
            variant="primary"
            size="lg"
            className="tracking-wide font-bold flex items-center gap-2 justify-center"
          >
            <Pen size={20} />
            Edit role
          </Button>
        </div>
        <div className="flex-3/4 flex flex-col gap-5">
          <Role
            roleName={user.role?.name}
            roleDescription={user.role?.description}
          />
          <ProjectAnalysis />
        </div>
      </div>
    </div>
  );
}

export default Main;
