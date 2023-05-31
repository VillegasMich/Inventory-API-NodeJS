import { Item } from "@prisma/client";

export type CreateItem = Omit<Item, "id">;

export type UpdateItem = Item;

export type MovedItem = { id: number; location: string };
