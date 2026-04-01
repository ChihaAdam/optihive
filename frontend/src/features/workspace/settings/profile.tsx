import { H4Gradiant } from "@/shared/components/ui/title-gradiant/title-gradiant";

function Profile() {
  return (
    <div className="flex flex-col gap-2 bg-foreground/10 p-5 rounded-lg">
      <H4Gradiant>Profile</H4Gradiant>
      <p className="text-foreground/80">
        Update your profile information and settings.
      </p>
    </div>
  );
}

export default Profile;
