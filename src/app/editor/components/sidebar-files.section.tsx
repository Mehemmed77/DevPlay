"use client";

import { Files } from "lucide-react";

import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Folder, FileCode, Search, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function SidebarFilesSection() {
  const [open, setOpen] = useState<boolean>(true);

  const handleClick = () => setOpen(prev => !prev);

  return (
    <>
      <SidebarMenuButton className="cursor-pointer" onClick={handleClick}>
        <div className="flex w-full justify-between items-center">
          <div className="flex gap-2 items-center">
            <Files size={"20px"} />
            <span className="text-lg font-bold">Files</span>
          </div>
          {open ? (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          )}
        </div>
      </SidebarMenuButton>

      {open && <>
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
      </SidebarMenuItem> </>}
    </>
  );
}
