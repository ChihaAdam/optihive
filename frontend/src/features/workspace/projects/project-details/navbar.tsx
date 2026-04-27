import Link from "@/features/workspace/components/link";
import { getUserRoleOnProject } from "@/features/auth/getUserRoleOnProject";
const routes = [
  { href: "/workspace/[id]", label: "overview", requireAdmin: false },
  { href: "/workspace/[id]/features", label: "features", requireAdmin: false },
  { href: "/workspace/[id]/chat", label: "chat", requireAdmin: false },
  { href: "/workspace/[id]/admin", label: "admin", requireAdmin: true },
];
const formatPath = (path: string, id: string) => {
  return path.replace("[id]", id);
};
async function Navbar({ id }: Readonly<{ id: string }>) {
  const role = await getUserRoleOnProject(id);
  return (
    <nav className="flex w-full items-center border-b border-b-foreground/20">
      {routes.map(
        (route) =>
          (!route.requireAdmin || role === "project_manager") && (
            <Link
              key={route.href}
              href={formatPath(route.href, id)}
              className="flex-1 flex justify-center border-x border-x-foreground/20 rounded-r-none"
            >
              {route.label}
            </Link>
          ),
      )}
    </nav>
  );
}

export default Navbar;
