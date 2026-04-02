type projectsInfoCardProps = {
  label: string;
  value: number;
  tailwindColor: string;
};

function projectsInfoCard({
  label,
  value,
  tailwindColor,
}: Readonly<projectsInfoCardProps>) {
  return (
    <div
      className={`flex flex-col gap-5 p-4 items-center rounded-lg text-center justify-between ${tailwindColor}`}
    >
      <h4 className="text-xl font-bold text-foreground/80">{label} </h4>
      <h5 className="text-6xl font-bold text-foreground">{value}</h5>
    </div>
  );
}

export default projectsInfoCard;
