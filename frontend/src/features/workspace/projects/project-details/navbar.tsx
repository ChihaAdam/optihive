import Link from "@/features/workspace/components/link";
const routes = [
  { href: "/workspace/[id]", label: "overview" },
  { href: "/workspace/[id]/features", label: "features" },
  { href: "/workspace/[id]/tasks", label: "tasks" },
  { href: "/workspace/[id]/settings", label: "settings" },
];
const formatPath = (path: string, id: string) => {
  return path.replace("[id]", id);
};
function Navbar({ id }: Readonly<{ id: string }>) {
  return (
    <nav className="flex w-full items-center border-b border-b-foreground/20">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={formatPath(route.href, id)}
          className="flex-1 flex justify-center border-x border-x-foreground/20 rounded-r-none"
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
