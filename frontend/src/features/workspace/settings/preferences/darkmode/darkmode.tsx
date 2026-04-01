import { H5Gradiant } from "@/shared/components/ui/title-gradiant/title-gradiant";
import ToggleDarkmodeSwitch from "./toggleDarkmodeSwitch";
function Darkmode() {
  return (
    <div className="flex flex-col gap-3">
      <H5Gradiant>Darkmode</H5Gradiant>
      <div className="flex items-center gap-2">
        <label htmlFor="darkmode" className="text-foreground/80 text-md">
          toggle darkmode :{" "}
        </label>
        <ToggleDarkmodeSwitch id="darkmode" size={"3"} />
      </div>
    </div>
  );
}

export default Darkmode;
