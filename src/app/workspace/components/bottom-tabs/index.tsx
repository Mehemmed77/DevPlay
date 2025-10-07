import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileCode } from "lucide-react";

export default function BottomTabs() {
  return (
    <div className="w-full">
      <Tabs defaultValue="terminal">
        <div className="border-solid border-gray-200 border-t border-b p-2">
          <TabsList>
            <TabsTrigger value="terminal" className="cursor-pointer">
              <div className="flex gap-2 items-center">
                <span className="text-sm font-bold">Terminal</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="console" className="cursor-pointer">
              <div className="flex gap-2 items-center">
                <span className="text-sm font-bold">Console</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="problems" className="cursor-pointer">
              <div className="flex gap-2 items-center">
                <span className="text-sm font-bold">Problems</span>
              </div>
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="terminal">AAAA</TabsContent>
        <TabsContent value="console">AAAAA</TabsContent>
        <TabsContent value="problems">AAAAAA</TabsContent>
      </Tabs>
    </div>
  );
}
