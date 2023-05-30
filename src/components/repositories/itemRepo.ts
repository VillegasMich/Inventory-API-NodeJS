import { Item, PrismaClient } from "@prisma/client";
import { prisma } from "../../database/prismaConnection";
import { CreateItem, UpdateItem } from "../DTO/itemDTO";

const getAll = (prisma: PrismaClient) => (): Promise<Item[]> =>
    prisma.item.findMany();

const getById = (prisma: PrismaClient) => (id: number) =>
    prisma.item.findFirst({
        where: {
            id: id,
        },
    });

const create =
    (prisma: PrismaClient) =>
    (createItem: CreateItem): Promise<Item> =>
        prisma.item.create({
            data: {
                name: createItem.name,
                price: createItem.price,
                location: createItem.location,
            },
        });

const update = (prisma: PrismaClient) => (updateItem: UpdateItem) =>
    prisma.item.update({
        where: {
            id: updateItem.id,
        },
        data: {
            name: updateItem.name,
            price: updateItem.price,
            location: updateItem.location,
        },
    });

export const itemRepo = {
    getAll: getAll(prisma),
    getById: getById(prisma),
    create: create(prisma),
    update: update(prisma),
};
