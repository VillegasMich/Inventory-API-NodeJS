import { NextFunction, Request, Response } from "express";
import { itemService } from "../services/itemServices";
import { Item } from "@prisma/client";
import { CreateItem } from "../DTO/itemDTO";

const getAll = async (
    req: Request,
    res: Response<Item[]>,
    next: NextFunction
) => {
    try {
        const items = await itemService.getAll();
        res.send(items);
    } catch (err) {
        next(err);
    }
};

const getById = async (
    req: Request<{ id: string }>,
    res: Response<Item>,
    next: NextFunction
) => {
    try {
        const item = await itemService.getById(+req.params.id);
        if (item) {
            res.send(item);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        next(err);
    }
};

const create = async (
    req: Request<never, never, CreateItem>,
    res: Response<Item>,
    next: NextFunction
) => {
    try {
        const item = await itemService.create(req.body);
        res.status(201).send(item);
    } catch (error) {
        next(error);
    }
};

export const itemController = {
    getAll,
    getById,
    create,
};
