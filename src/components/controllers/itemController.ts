import { NextFunction, Request, Response } from "express";
import { itemService } from "../services/itemServices";
import { Item } from "@prisma/client";
import { CreateItem, UpdateItem } from "../DTO/itemDTO";

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

const getByName = async (
    req: Request<{ name: string }>,
    res: Response<Item[]>,
    next: NextFunction
) => {
    try {
        const items = await itemService.getByName(
            req.params.name.toLowerCase()
        );
        if (items) {
            res.send(items);
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        next(error);
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

const update = async (
    req: Request<never, never, UpdateItem>,
    res: Response<Item>,
    next: NextFunction
) => {
    try {
        const updatedItem = await itemService.update(req.body);
        res.send(updatedItem);
    } catch (error) {
        next(error);
    }
};

const removeById = async (
    req: Request<{ id: number }>,
    res: Response,
    next: NextFunction
) => {
    try {
        await itemService.removeById(+req.params.id);
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
};

export const itemController = {
    getAll,
    getById,
    getByName,
    create,
    update,
    removeById,
};
