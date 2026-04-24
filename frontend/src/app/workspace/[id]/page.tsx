import ProjectDetails from "@/features/workspace/projects/project-details/project-details";
const page = async ({
  params,
}: Readonly<{ params: Promise<{ id: string }> }>) => {
  const { id } = await params;
  return <ProjectDetails id={id} />;
};

export default page;
