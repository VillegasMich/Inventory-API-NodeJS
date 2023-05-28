import { Item, PrismaClient } from "@prisma/client";
import { prisma } from "../../database/prismaConnection";

const getAll = (prisma: PrismaClient) => (): Promise<Item[]> =>
    prisma.item.findMany();

const getById = (prisma: PrismaClient) => (id: number) =>
    prisma.item.findFirst({
        where: {
            id: id,
        },
    });

export const itemRepo = {
    getAll: getAll(prisma),
    getById: getById(prisma),
};
