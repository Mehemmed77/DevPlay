import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/sidebar";
import Tabs from "./components/tabs";
import BottomTabs from "./components/bottom-tabs";

export default function Page() {
  return (
    <>
      <SidebarProvider>
          <AppSidebar />
          <div className="w-full pt-3">
            <Tabs/>
            <BottomTabs />
          </div>
      </SidebarProvider>
    </>
  );
}
