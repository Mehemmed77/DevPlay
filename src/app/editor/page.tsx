import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./components";


export default function Page() {
    return <>
        <SidebarProvider>
            <AppSidebar />
            <div>
            </div>
        </SidebarProvider>
    </>
}