import { Item } from "@prisma/client";
import { itemRepo } from "../repositories/itemRepo";

const getAll = async (): Promise<Item[]> => {
    const items = await itemRepo.getAll();
    return items;
};

const getById = async (id: number) => {
    const item = await itemRepo.getById(id);
    return item;
};

export const itemService = {
    getAll,
    getById,
};
