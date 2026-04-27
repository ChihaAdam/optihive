import { H5Gradiant } from "@/shared/components/ui/title-gradiant/title-gradiant";
import getUserInfo from "@/shared/actions/getUserInfo";
import Avatar from "./avatar";

const avatars = [
  {
    id: 1,
    src: "/avatars/1.svg",
  },
  {
    id: 2,
    src: "/avatars/2.svg",
  },
  {
    id: 3,
    src: "/avatars/3.svg",
  },
  {
    id: 4,
    src: "/avatars/4.svg",
  },
  {
    id: 5,
    src: "/avatars/5.svg",
  },
  {
    id: 6,
    src: "/avatars/6.svg",
  },
  {
    id: 7,
    src: "/avatars/7.svg",
  },
  {
    id: 8,
    src: "/avatars/8.svg",
  },
  {
    id: 9,
    src: "/avatars/9.svg",
  },
  {
    id: 10,
    src: "/avatars/10.svg",
  },
];
async function Avatars() {
  const user = await getUserInfo();
  return (
    <div className="flex flex-col gap-3 w-1/2 max-md:w-full">
      <H5Gradiant>Avatar</H5Gradiant>
      <div className="grid grid-cols-5 gap-5">
        {avatars.map((avatar) => (
          <Avatar
            key={avatar.id}
            avatar={avatar}
            isSelected={user.avatar === avatar.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Avatars;
