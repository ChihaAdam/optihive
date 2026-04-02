import Navbar from "@/features/main/navbar/navbar";
import Home from "@/features/main/home/home";
import Solutions from "@/features/main/solutions/solutions";
import About from "@/features/main/about/about";
export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-12">
        <Home />
        <Solutions />
        <About />
      </main>
    </>
  );
}
