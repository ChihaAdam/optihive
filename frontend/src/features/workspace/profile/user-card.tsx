import Image from "next/image";
type UserCardProps = {
  username: string;
  email: string;
  avatar: string;
};
function UserCard({ username, email, avatar }: Readonly<UserCardProps>) {
  return (
    <div className="relative pb-12 pt-8 flex flex-col gap-5 items-center justify-center flex-1/4 shadow-lg border border-foreground/20 bg-foreground/5 rounded-lg">
      <div className="absolute top-0 left-0 bg-primary/50 w-full h-24 rounded-lg"></div>
      <Image
        src={`/avatars/${avatar}.svg`}
        alt="avatar"
        width={200}
        height={200}
        className="rounded-full z-10 w-48 h-48 max-xl:w-32 max-xl:h-32 bg-background shadow-lg p-2"
      />
      <div className="flex flex-col  items-center">
        <h4 className="text-2xl font-bold">{username}</h4>
        <p className="text-foreground/50">{email}</p>
      </div>
    </div>
  );
}

export default UserCard;
