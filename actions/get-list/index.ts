"use server"
import { redirect } from "next/navigation";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import { db } from "@/lib/db";
import { GetList } from "./schema";
import { createSafeAction } from "@/lib/create-safe-action";


const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!orgId) {
    redirect("/select-org");
  }

  const lists = await db.list.findMany({
    where: {
      boardId: data.boardId,
      board: {
        orgId,
      },
    },
    include: {
      cards: {
        orderBy: {
          order: "asc",
        },
      },
    },
    orderBy: {
      order: "asc",
    },
  });

  if (!lists) {
    return {
      error: "List not found",
    };
  }

  return { data: lists };
};

export const getList = createSafeAction(GetList, handler);
