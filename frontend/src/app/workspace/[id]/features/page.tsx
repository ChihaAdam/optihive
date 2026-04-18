import Features from "@/features/workspace/projects/project-details/features/features";

async function Page({ params }: Readonly<{ params: Promise<{ id: string }> }>) {
  const { id } = await params;
  return <Features id={id} />;
}

export default Page;
