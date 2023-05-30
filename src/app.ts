import express from "express";
import { itemRouter } from "./routes/itemRouter";
import { handleError } from "./middleware/handleError";

const port = 8080;

const app = express();
app.use(express.json());

app.use("/items", itemRouter);

app.use(handleError);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
