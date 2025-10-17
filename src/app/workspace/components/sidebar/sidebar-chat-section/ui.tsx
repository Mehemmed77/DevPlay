"use client";

import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { MessageSquare } from "lucide-react";
import Image from "next/image";
import { Send, ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function SidebarChatSectionUI() {
  const [open, setOpen] = useState<boolean>(true);

  const handleClick = () => setOpen((prev) => !prev);

  return (
    <>
      <SidebarMenuItem>
        <SidebarMenuButton className="cursor-pointer" onClick={handleClick}>
          <div className="w-full flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <MessageSquare className="size-4" />
              <span className="text-lg font-bold">Chat</span>
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
          <Input
            type="text"
            placeholder="Message #devplay"
            className="pr-10"
          ></Input>
          <Send className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
        </div>
      </SidebarMenuItem>
      </>}
    </>
  );
}
