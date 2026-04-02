import Link from "next/link";
import Button from "@/shared/components/ui/button/button";
function Links() {
  return (
    <div className="flex gap-5 max-md:justify-around max-md:w-full">
      <Button
        size="md"
        variant="secondary"
        className="underline-on-hover cursor-pointer"
        asChild
      >
        <Link href="#home">Home</Link>
      </Button>

      <Button
        size="md"
        variant="secondary"
        className="underline-on-hover cursor-pointer"
        asChild
      >
        <Link href="#solutions">Solutions</Link>
      </Button>

      <Button
        size="md"
        variant="secondary"
        className="underline-on-hover cursor-pointer"
        asChild
      >
        <Link href="#about-us">About Us</Link>
      </Button>
    </div>
  );
}

export default Links;
