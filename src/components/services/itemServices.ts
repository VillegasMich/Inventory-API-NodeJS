import { Item } from "@prisma/client";
import { itemRepo } from "../repositories/itemRepo";
import { CreateItem } from "../DTO/itemDTO";

const getAll = async (): Promise<Item[]> => {
    const items = await itemRepo.getAll();
    return items;
};

const getById = async (id: number) => {
    const item = await itemRepo.getById(id);
    return item;
};

const create = async (createItem: CreateItem) => {
    const item = await itemRepo.create(createItem);
    return item;
};

export const itemService = {
    getAll,
    getById,
    create,
};
