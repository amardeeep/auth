const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));

const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
//authentication
const passport = require("passport");
const session = require("express-session");
const LocalStrategy = require("passport-local").Strategy;
app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());
//import routers
const homeRouter = require("./routes/homeRouter");
const dashRouter = require("./routes/dashRouter");
app.use("/", homeRouter);
app.use("/dashboard", dashRouter);
app.listen(5000, () => {
  console.log(`Listening on port : 5000`);
});
