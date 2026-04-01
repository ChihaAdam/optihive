import { H4Gradiant } from "@/shared/components/ui/title-gradiant/title-gradiant";
import UpdateUsernameForm from "./updateUsernameForm";
import UpdatePasswordForm from "./updatePasswordForm";
function Profile() {
  return (
    <div className="flex flex-col gap-2 bg-foreground/5 p-5 rounded-lg shadow-lg">
      <div className="flex flex-col gap-2 mb-5">
        <H4Gradiant>Profile</H4Gradiant>
        <p className="text-foreground/80">
          Update your profile information and settings.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <UpdateUsernameForm />
        <UpdatePasswordForm />
      </div>
    </div>
  );
}

export default Profile;
