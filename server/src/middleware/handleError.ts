import { ErrorRequestHandler } from "express";

export const handleError: ErrorRequestHandler = (err, req, res) => {
    console.error(err.stack);
    res.status(500).send("Internal server error");
};
