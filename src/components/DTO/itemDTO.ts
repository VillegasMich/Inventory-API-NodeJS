import { Item } from "@prisma/client";

export type CreateItem = Omit<Item, "id">;
