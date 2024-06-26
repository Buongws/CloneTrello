import { z } from "zod";

export const UpdateCard = z.object({
  boardId: z.string(),
  description: z.optional(
    z
      .string({
        invalid_type_error: "Description must be a string",
        required_error: "Description is required",
      })
      .min(3, {
        message: "Description is too short",
      })
  ),
  id: z.string(),
  title: z.optional(
    z
      .string({
        invalid_type_error: "Title must be a string",
        required_error: "Title is required",
      })
      .min(3, {
        message: "Title is too short",
      })
  ),
});
