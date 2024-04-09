"use client";

import { Collection } from "@prisma/client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { CollectionColors, CollectionColor } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { createTaskSchema, createTaskSchemaType } from "@/schema/createTask";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  open: boolean;
  collection: Collection;
  setOpen: (open: boolean) => void;
}

const CreateTaskDialog = ({ open, collection, setOpen }: Props) => {
  const form = useForm<createTaskSchemaType>({
    resolver: zodResolver(createTaskSchema),
    defaultValues: {
      collectionId: collection.id,
    },
  });
  const openChangeWrapper = (value: boolean) => {
    setOpen(value);
  };

  return (
    <Dialog open={open} onOpenChange={openChangeWrapper}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex gap-2">
            Add task to collection:
            <span
              className={cn(
                "p-[1px] bg-clip-text text-transparent",
                CollectionColors[collection.color as CollectionColor]
              )}>
              {collection.name}
            </span>
          </DialogTitle>
          <DialogDescription>
            Add a task to your collection. You can add as many tasks as you want
            to a collection.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTaskDialog;
