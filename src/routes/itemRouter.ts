import { Router } from "express";
import { itemController } from "../components/controllers/itemController";

export const itemRouter = Router()
    .get("/", itemController.getAll)
    .get("/:id", itemController.getById)
    .get("/name/:name", itemController.getByName)
    .get("/price/:filter/:price", itemController.getByPrice)
    .post("/", itemController.create)
    .put("/", itemController.update)
    .delete("/:id", itemController.removeById);
