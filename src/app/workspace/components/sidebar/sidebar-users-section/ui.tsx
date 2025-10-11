"use client";
import { Users, ChevronUp, ChevronDown } from "lucide-react";

import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import Image from "next/image";
import { useState } from "react";

export default function SidebarUsersSection() {
  const [open, setOpen] = useState<boolean>(true);

  const handleClick = () => setOpen((prev) => !prev);

  return (
    <>
      <SidebarMenuItem>
        <SidebarMenuButton className="cursor-pointer" onClick={handleClick}>
          <div className="flex w-full justify-between items-center">
            <div className="flex gap-2 justify-between items-center">
              <Users className="size-4" />
              <span className="text-lg font-bold">Participants</span>
            </div>
            {open ? (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            )}
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>

      {open && <>
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
            <span className="text-sm"> Alex • editing</span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>

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

      <SidebarMenuItem>
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
      </SidebarMenuItem></>}
    </>
  );
}
