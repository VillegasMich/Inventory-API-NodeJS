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

const getByName = (prisma: PrismaClient) => (name: string) =>
    prisma.item.findMany({
        where: {
            name: {
                contains: name,
            },
        },
    });

const create =
    (prisma: PrismaClient) =>
    (createItem: CreateItem): Promise<Item> =>
        prisma.item.create({
            data: {
                name: createItem.name.toLowerCase(),
                price: createItem.price,
                location: createItem.location.toLowerCase(),
            },
        });

const update = (prisma: PrismaClient) => (updateItem: UpdateItem) =>
    prisma.item.update({
        where: {
            id: updateItem.id,
        },
        data: {
            name: updateItem.name.toLowerCase(),
            price: updateItem.price,
            location: updateItem.location.toLowerCase(),
        },
    });

const removeById = (prisma: PrismaClient) => (id: number) =>
    prisma.item.delete({
        where: {
            id: id,
        },
    });

export const itemRepo = {
    getAll: getAll(prisma),
    getById: getById(prisma),
    getByName: getByName(prisma),
    create: create(prisma),
    update: update(prisma),
    remove: removeById(prisma),
};
