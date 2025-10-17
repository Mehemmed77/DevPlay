"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FileCode, CirclePlus, FolderPlus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function AddFileFolderDialog() {
    const [type, setType] = useState<"File" | "Folder">("File");

  return (
    <Dialog>
      <DialogTrigger className="ml-2" asChild>
          <CirclePlus className="cursor-pointer" onClick={() => setType("File")} />
      </DialogTrigger>
      <DialogTrigger className="mx-2" asChild>
          <FolderPlus className="cursor-pointer" onClick={() => setType("Folder")} />
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create {type}</DialogTitle>
        </DialogHeader>

        <div>
          <Input id="create" placeholder={`${type} Name`} />
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
