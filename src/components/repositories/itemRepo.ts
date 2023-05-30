import { Item, PrismaClient } from "@prisma/client";
import { prisma } from "../../database/prismaConnection";
import { CreateItem } from "../DTO/itemDTO";

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

export const itemRepo = {
    getAll: getAll(prisma),
    getById: getById(prisma),
    create: create(prisma),
};
