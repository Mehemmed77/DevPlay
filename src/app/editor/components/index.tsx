import * as React from "react";
import { Separator } from "@/components/ui/separator";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import SidebarFilesSection from "./sidebar-files.section";
import SidebarUsersSection from "./sidebar-users-section";
import SidebarChatSection from "./sidebar-chat-section";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="floating" {...props}>
      {/* HEADER */}
      <SidebarHeader />

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>

            {/* SEARCH AND FILES SECTION */}
            <SidebarFilesSection />

            <Separator />

            {/* PARTICIPANTS SECTION */}
            <SidebarUsersSection />

            <Separator />

            {/* CHAT SECTION */}
            <SidebarChatSection />

          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
