import AdminMain from "@/features/workspace/projects/project-details/admin/main";
type PageProps = {
  params: Promise<{ id: string }>;
};
async function page({ params }: PageProps) {
  const { id } = await params;
  return <AdminMain id={id} />;
}

export default page;
