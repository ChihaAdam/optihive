import Accordion from "@/shared/components/ui/accordion/accordion";
import getUserInfo from "./getUserInfo";
import { AlertCircle } from "lucide-react";
import { Avatar } from "@radix-ui/themes";
async function UserCard() {
  let user;
  try {
    user = await getUserInfo();
  } catch (error) {
    return (
      <Accordion variant="alert">
        <AlertCircle className="inline mr-2" />
        error
      </Accordion>
    );
  }
  return (
    <div className="flex items-center gap-2 p-0 border border-foreground/20 rounded-lg px-2 py-1 shadow-md">
      <p className="font-bold">{user?.username ?? "user"}</p>
      <Avatar
        src={`/avatars/${user?.avatar ?? 1}.svg`}
        fallback={user?.username ?? "user"}
        className="rounded-full"
      />
    </div>
  );
}

export default UserCard;
