import Navbar from "@/features/workspace/projects/project-details/navbar";
type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
};
async function Layout({ children, params }: Readonly<LayoutProps>) {
  const { id } = await params;
  return (
    <div className="flex flex-col gap-4 p-4">
      <Navbar id={id} />
      {children}
    </div>
  );
}

export default Layout;
