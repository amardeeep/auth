const { Router } = require("express");
const homeRouter = Router();
const homeController = require("../controllers/homeController");
homeRouter.get("/", homeController.getHome);
homeRouter.get("/login", homeController.getLogin);
homeRouter.get("/sign-up", homeController.getSignup);
homeRouter.post("/sign-up", homeController.postSignup);
module.exports = homeRouter;
