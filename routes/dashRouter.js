const { Router } = require("express");
const dashController = require("../controllers/dashController");
const dashRouter = Router();
dashRouter.get("/", dashController.getDash);

module.exports = dashRouter;
