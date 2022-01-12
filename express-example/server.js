const express = require("express");
const rootRouter = express.Router();
const { deleteRoute, getRoute, postRoute, putRoute } = require("./controllers");

rootRouter.get("/", getRoute);
rootRouter.get("/:id", getRoute);
rootRouter.post("/", postRoute);
rootRouter.put("/", putRoute);
rootRouter.delete("/", deleteRoute);

module.exports = rootRouter;
