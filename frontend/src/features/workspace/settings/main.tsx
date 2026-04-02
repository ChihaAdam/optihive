import { H3Gradiant } from "@/shared/components/ui/title-gradiant/title-gradiant";
import Profile from "./profile/profile";
import Preferences from "./preferences/preferences";
async function Main() {
  return (
    <section className="flex flex-col gap-5 p-5">
      <H3Gradiant>Settings</H3Gradiant>
      <div className="flex flex-col gap-10 mb-10">
        <Preferences />
        <Profile />
      </div>
    </section>
  );
}

export default Main;
