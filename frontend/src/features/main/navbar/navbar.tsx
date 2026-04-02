import Image from "next/image";
import Button from "@/shared/components/ui/button/button";
import Links from "./links";
import DarkModeToggle from "./darkmode-toggle";
import Link from "next/link";
function Navbar() {
  return (
    <header className="flex max-md:flex-col max-md:gap-5 justify-between shadow-lg items-center px-4 sticky top-0 left-0 z-50 bg-background/50 backdrop-blur">
      <Image
        src="/logo.png"
        width={824}
        height={303}
        className="w-64"
        alt="logo"
        priority
      ></Image>
      <Links />
      <div className="flex gap-4">
        <Button size="md" variant="primary" asChild>
          <Link href="/login">Login</Link>
        </Button>
        <Button size="md" variant="secondary" asChild>
          <Link href="/signup">Register</Link>
        </Button>
        <DarkModeToggle />
      </div>
    </header>
  );
}

export default Navbar;
