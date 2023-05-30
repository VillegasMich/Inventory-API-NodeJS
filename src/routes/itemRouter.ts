import { Router } from "express";
import { itemController } from "../components/controllers/itemController";

export const itemRouter = Router()
    .get("/", itemController.getAll)
    .get("/:id", itemController.getById)
    .post("/", itemController.create)
    .put("/", itemController.update);
