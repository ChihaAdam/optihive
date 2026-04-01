import { H4Gradiant } from "@/shared/components/ui/title-gradiant/title-gradiant";
import Avatars from "./avatars";
function Preferences() {
  return (
    <div className="flex flex-col gap-3 bg-foreground/10 p-5 rounded-lg">
      <div className="flex flex-col gap-2 mb-5">
        <H4Gradiant>Preferences</H4Gradiant>
        <p className="text-foreground/80">
          Update your preferences and settings.
        </p>
      </div>
      <Avatars />
    </div>
  );
}

export default Preferences;
