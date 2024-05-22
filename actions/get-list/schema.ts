import { z } from "zod";

export const GetList = z.object({
  boardId: z.string(),
});
