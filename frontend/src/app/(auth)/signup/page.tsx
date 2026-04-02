import Signup from "@/features/auth/signup/signup";
import Image from "next/image";
import { getToken } from "@/features/auth/token";
import { redirect } from "next/navigation";
async function Page() {
  const token = await getToken();
  if (token) {
    redirect("/workspace");
  }
  return (
    <div className="flex flex-col gap-10 items-center justify-center h-screen">
      <Image
        src="/logo.png"
        alt="logo"
        width={824}
        height={303}
        className="w-96"
      />
      <Signup />
    </div>
  );
}

export default Page;
