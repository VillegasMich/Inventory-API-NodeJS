import { NextFunction, Request, Response } from "express";
import { itemService } from "../services/itemServices";
import { Item } from "@prisma/client";

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

export const itemController = {
    getAll,
    getById,
};
