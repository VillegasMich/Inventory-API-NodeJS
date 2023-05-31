import { Item } from "@prisma/client";
import { itemRepo } from "../repositories/itemRepo";
import { CreateItem, UpdateItem } from "../DTO/itemDTO";

const getAll = async (): Promise<Item[]> => {
    const items = await itemRepo.getAll();
    return items;
};

const getById = async (id: number): Promise<Item | null> => {
    const item = await itemRepo.getById(id);
    return item;
};

const create = async (createItem: CreateItem): Promise<Item> => {
    const item = await itemRepo.create(createItem);
    return item;
};

const update = async (updateItem: UpdateItem): Promise<Item> => {
    const item = await itemRepo.update(updateItem);
    return item;
};

const removeById = async (id: number) => {
    await itemRepo.remove(id);
};

export const itemService = {
    getAll,
    getById,
    create,
    update,
    removeById,
};
