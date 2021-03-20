const express = require("express");
const subscribersController = require("../controller/SubscribersController");
const { getSubscriber } = require("../middlewares/getSubscriber");

const subscribersRouter = express.Router();

subscribersRouter.get("/", subscribersController.index);
subscribersRouter.get("/:id", getSubscriber, subscribersController.show);
subscribersRouter.post("/", subscribersController.create);
subscribersRouter.patch("/:id", getSubscriber, subscribersController.update);
subscribersRouter.delete("/:id", getSubscriber, subscribersController.delete);

module.exports = subscribersRouter;
