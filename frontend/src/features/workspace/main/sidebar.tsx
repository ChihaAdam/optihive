import { LogOut, Settings, Plus, User, Folder, Bot } from "lucide-react";
import Link from "@/features/workspace/components/link";
import { H4Gradiant } from "@/shared/components/ui/title-gradiant/title-gradiant";
import logoutAction from "./logoutAction";
function Sidebar() {
  return (
    <aside className="w-64 min-h-full flex flex-col gap-5 py-5 justify-between px-0 shadow-lg">
      <div className="flex justify-start flex-col gap-5">
        <div className="flex flex-col items-start px-5 py-2">
          <H4Gradiant className="m-0">OptiHive</H4Gradiant>
          <h5 className="text-foreground/50">workspace</h5>
        </div>
        <Link href="/workspace" className="px-5 py-2 text-foreground">
          <Folder size={20} />
          <p>Projects</p>
        </Link>
        <Link href="/workspace/new" className="px-5 py-2 text-foreground">
          <Plus size={20} />
          <p>New Project</p>
        </Link>
        <Link href="/workspace/profile" className="px-5 py-2 text-foreground">
          <User size={20} />
          <p>Profile</p>
        </Link>
        <Link href="/workspace/ask-jimmy" className="px-5 py-2 text-foreground">
          <Bot size={20} />
          <p>Ask Jimmy</p>
        </Link>
        <Link href="/workspace/settings" className="px-5 py-2 text-foreground">
          <Settings size={20} />
          <p>Settings</p>
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <button
          className="cursor-pointer flex gap-2 px-5 items-center text-md w-64 rounded-l-none rounded-r-lg py-2 bg-red-500/90 font-bold text-lg hover:bg-red-500 text-white transition-colors duration-300 ease-in-out"
          onClick={logoutAction}
        >
          <LogOut size={25} />
          <p>Logout</p>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
