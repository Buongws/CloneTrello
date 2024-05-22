import { z } from "zod";

import { ActionState } from "@/lib/create-safe-action";

import { GetList } from "./schema";
import { ListWithCards } from "@/types";

export type InputType = z.infer<typeof GetList>;

export type ReturnType = ActionState<InputType, ListWithCards[]>;
