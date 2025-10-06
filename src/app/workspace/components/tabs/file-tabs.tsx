import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileCode } from "lucide-react";

export default function FileTabs() {
  return (
    <div className="w-full">
      <Tabs defaultValue="index.js">
        <div className="border-solid border-gray-200 border-t border-b p-2">
          <TabsList>
            <TabsTrigger value="index.js" className="cursor-pointer">
              <div className="flex gap-2 items-center">
                <FileCode />
                <span className="text-sm">index.js</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="server.js" className="cursor-pointer">
              <div className="flex gap-2 items-center">
                <FileCode />
                <span className="text-sm">server.js</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="Readme.md" className="cursor-pointer">
              <div className="flex gap-2 items-center">
                <FileCode />
                <span className="text-sm">Readme.md</span>
              </div>
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="index.js">AAAA</TabsContent>
        <TabsContent value="server.js">AAAAA</TabsContent>
        <TabsContent value="Readme.md">AAAAAA</TabsContent>
      </Tabs>
    </div>
  );
}
