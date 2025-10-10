"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/sidebar";
import Tabs from "./components/tabs";
import BottomTabs from "./components/bottom-tabs";
import CodeEditor from "./components/editor/code-editor";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const doSomething = async () => {
      const res = await fetch("/api/populate"); // relative URL is enough
      const data = await res.json();
      console.log(data);
    };

    doSomething();
  }, []);

  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <div className="w-full p-3">
          <Tabs />
          <BottomTabs />
        </div>
      </SidebarProvider>
    </>
  );
}
