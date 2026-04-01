import { H4Gradiant } from "@/shared/components/ui/title-gradiant/title-gradiant";
import Avatars from "./avatar/avatars";
import Darkmode from "./darkmode/darkmode";
function Preferences() {
  return (
    <div className="flex flex-col gap-3 bg-foreground/5 p-5 rounded-lg shadow-lg">
      <div className="flex flex-col gap-2 mb-5">
        <H4Gradiant>Preferences</H4Gradiant>
        <p className="text-foreground/80">
          Update your preferences and settings.
        </p>
      </div>
      <Avatars />
      <Darkmode />
    </div>
  );
}

export default Preferences;
