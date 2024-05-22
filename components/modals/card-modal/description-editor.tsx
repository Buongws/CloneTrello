"use client";
import { useState, Ref, useRef, ElementRef } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { AlignLeft } from "lucide-react";
import { useParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { CardWithList } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import { useEventListener, useOnClickOutside } from "usehooks-ts";
import { FormTextarea } from "@/components/form/form-textarea";
import { FormSubmit } from "../../form/form-submit";

import { useAction } from "@/hooks/use-action";
import { updateCard } from "@/actions/update-card";
import { toast } from "sonner";
import { Editor } from "primereact/editor";

interface DescriptionProps {
  data: CardWithList;
}

export const DescriptionEditor = ({ data }: DescriptionProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text , setText] = useState<string|null>("");

  const params = useParams();
  const QueryClient = useQueryClient();

  const formRef = useRef<ElementRef<"form">>(null);
  const textareaRef = useRef<ElementRef<"textarea">>(null);

  const { execute, fieldErrors } = useAction(updateCard, {
    onSuccess: (data) => {
      QueryClient.invalidateQueries({
        queryKey: ["card", data.id],
      });
      QueryClient.invalidateQueries({
        queryKey: ["card-logs", data.id],
      });

      toast.success(`Card "${data.title}" updated successfully`);
      disableEditing();
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      textareaRef.current?.focus();
    });
  };

  const disableEditing = () => {
    setIsEditing(false);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      disableEditing();
    }
  };

  useEventListener("keydown", onKeyDown);
  useOnClickOutside(formRef, disableEditing);

  const onSubmit = (formData: FormData) => {
    // const description = formData.get("description") as string;
    const description = text as string;

    const boardId = params.boardId as string;

    if (description === data.description) return;
    execute({
      description,
      boardId,
      id: data.id,
    });
  };

  return (
    <div className="flex items-start gap-x-3 w-full">
      <AlignLeft className="h-5 w-5 mt-0.5 text-neutral-700" />
      <div className="w-full">
        <span className="font-semibold text-neutral-700 mb-2">Description</span>
        {isEditing ? (
          <form action={onSubmit} ref={formRef} className="space-y-2">
            {/* <FormTextarea
              id="description"
              className="w-full mt-2"
              placeholder="Add a more detailed description ..."
              defaultValue={data.description || undefined}
              errors={fieldErrors}
              ref={textareaRef}
            /> */}
            <Editor id="description" value={data?.description || ""} onTextChange={(e) => { setText(e.htmlValue)}} style={{ height: '320px' }} />
            <div className="flex items-center gap-x-2">
              <FormSubmit>Save</FormSubmit>
              <Button
                type="button"
                onClick={disableEditing}
                size="sm"
                variant="ghost"
              >
                Cancel
              </Button>
            </div>
          </form>
        ) : (
          <div
            onClick={enableEditing}
            role="button"
            className="min-h-[78px] bg-neutral-200 text-sm font-medium py-3 px-3.5 rounded-md max-h-[50vh]  overflow-y-auto cursor-pointer"
            dangerouslySetInnerHTML={{ __html: data.description || "Add a more detailed description ..." }}
          >
          </div>
        )}
      </div>
    </div>
  );
};

DescriptionEditor.Skeleton = function DescriptionSkeleton() {
  return (
    <Skeleton className="flex items-start gap-x-3 w-full">
      <Skeleton className="h6 w-6 bg-neutral-200" />
      <div className="w-full">
        <Skeleton className="h-6 w-24 mb-2 bg-neutral-200" />
        <Skeleton className="w-full h-[78px] bg-neutral-200" />
      </div>
    </Skeleton>
  );
};
