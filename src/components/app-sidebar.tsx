import * as React from "react";
import { Files } from "lucide-react";
import { Users } from "lucide-react";
import { Separator } from "@/components/ui/separator";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Input } from "./ui/input";
import { Folder } from "lucide-react";
import { FileCode } from "lucide-react";
import { AppWindow } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { Search } from 'lucide-react';
import Image from "next/image";
import { Send } from "lucide-react";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="floating" {...props}>
      {/* HEADER */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <AppWindow className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">DevPlay</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>  
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>

            {/* SEARCH AND FILES SECTION */}
            <SidebarMenuButton className="cursor-pointer">
              <div className="flex gap-2 items-center">
                <Files size={"20px"} />
                <span className="text-lg font-bold">Files</span>
              </div>
            </SidebarMenuButton>

            <SidebarMenuItem className="mt-0.5">
              <div className="relative w-full max-w-sm">
                <Input type="text" placeholder="Search files..."></Input>
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              </div>
            </SidebarMenuItem>

            <SidebarMenuItem className="mt-1">
              <SidebarMenuButton className="cursor-pointer">
                <div className="flex gap-2 items-center">
                  <Folder className="size-4" />
                  <span className="text-sm">src</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuSubItem className="pl-1">
              <SidebarMenuSubButton className="cursor-pointer">
                <FileCode className="size-4" />
                <span className="text-sm">index.js</span>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>

            <SidebarMenuSubItem className="pl-1">
              <SidebarMenuSubButton className="cursor-pointer">
                <FileCode className="size-4" />
                <span className="text-sm">server.js</span>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>

            <SidebarMenuItem>
              <SidebarMenuButton className="cursor-pointer">
                <FileCode className="size-4" />
                <span className="text-sm">README.md</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <Separator />

            {/* PARTICIPANTS SECTION */}
            <SidebarMenuItem>
              <SidebarMenuButton className="cursor-pointer">
                <Users className="size-4" />
                <span className="text-lg font-bold">Participants</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuButton className="cursor-pointer">
              <div className="flex gap-2 items-center">
                <div className="w-5 h-5 relative flex-shrink-0">
                  <Image
                    src="/dummy.avif"
                    alt="User image"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <span className="text-sm"> Alex • editing</span>
              </div>
            </SidebarMenuButton>

            <SidebarMenuItem>
              <SidebarMenuButton className="cursor-pointer">
                <div className="flex gap-2 items-center">
                  <div className="w-5 h-5 relative flex-shrink-0">
                    <Image
                      src="/dummy.avif"
                      alt="User image"
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <span className="text-sm"> Sam • viewing</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuButton className="cursor-pointer bg-green-100">
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="w-5 h-5 relative flex-shrink-0">
                  <Image
                    src="/dummy.avif"
                    alt="User image"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <span className="text-sm"> PriyaPriya • typing</span>
              </div>
            </SidebarMenuButton>

            <Separator />

            {/* CHAT SECTION */}
            <SidebarMenuItem>
              <SidebarMenuButton className="cursor-pointer">
                <MessageSquare className="size-4" />
                <span className="text-lg font-bold">Chat</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <div className="border-solid border-grey-200 border-2 w-full rounded-sm p-2">
                <div className="flex gap-2 items-center">
                  <div className="w-5 h-5 relative flex-shrink-0">
                    <Image
                      src="/dummy.avif"
                      alt="User image"
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <span className="text-sm"> aaa</span>
                </div>
                <div className="flex gap-2 items-center mt-2">
                  <div className="w-5 h-5 relative flex-shrink-0">
                    <Image
                      src="/dummy.avif"
                      alt="User image"
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <span className="text-sm"> aaa</span>
                </div>
                <div className="flex gap-2 items-center mt-2">
                  <div className="w-5 h-5 relative flex-shrink-0">
                    <Image
                      src="/dummy.avif"
                      alt="User image"
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <span className="text-sm"> aaa</span>
                </div>
              </div>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <div className="mt-2 relative w-full max-w-sm">
                <Input type="text" placeholder="Message #devplay" className="pr-10">
                </Input>
                <Send className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              </div>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
