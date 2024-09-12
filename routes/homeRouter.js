const { Router } = require("express");
const homeRouter = Router();
const homeController = require("../controllers/homeController");
homeRouter.get("/", homeController.getHome);
homeRouter.get("/login", homeController.getLogin);
homeRouter.get("/sign-up", homeController.getSignup);
module.exports = homeRouter;
