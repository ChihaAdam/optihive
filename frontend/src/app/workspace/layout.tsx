import Navbar from "@/features/workspace/main/navbar/navbar";
import Sidebar from "@/features/workspace/main/sidebar";
import { ScrollArea } from "@radix-ui/themes";
function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-center flex-0">
        <Navbar />
      </header>
      <main className="flex h-full w-full flex-1 overflow-y-hidden">
        <Sidebar />
        <section className="flex-1 p-5 h-full overflow-y-hidden">
          <ScrollArea type="always" scrollbars="vertical" className="h-full">
            {children}
          </ScrollArea>
        </section>
      </main>
    </div>
  );
}

export default Layout;
