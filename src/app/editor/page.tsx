import { SidebarProvider } from "@/components/ui/sidebar";
import Sidebar from "./sidebar";

export default function Page() {
    return <>
        <SidebarProvider>
            <Sidebar />
            <div>
                sdjsj
            </div>
        </SidebarProvider>
    </>
}