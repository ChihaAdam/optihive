"use client";
import Image from "next/image";
import { HTMLAttributes } from "react";
import avatarChangeAction from "./avatarChangeAction";
import useForm from "@/shared/hooks/useForm";
type AvatarProps = HTMLAttributes<HTMLFormElement> & {
  avatar: {
    id: number;
    src: string;
  };
  isSelected: boolean;
};

function Avatar({ avatar, isSelected, ...props }: AvatarProps) {
  const { formAction } = useForm({
    action: (state, formData: FormData) => {
      formData.append("avatar", avatar.id.toString());
      return avatarChangeAction(state, formData);
    },
    successMessage: "Avatar changed successfully",
    errorMessage: "Failed to change avatar",
  });
  return (
    <form {...props} action={formAction}>
      <button type="submit" className="cursor-pointer">
        <Image
          src={avatar.src}
          alt={avatar.id.toString()}
          width={70}
          height={70}
          className={`rounded-full ${isSelected ? "ring-2 ring-foreground" : ""} border border-foreground/50`}
        />
      </button>
    </form>
  );
}

export default Avatar;
