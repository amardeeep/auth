const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));
const homeRouter = require("./routes/homeRouter");
const dashRouter = require("./routes/dashRouter");
const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/", homeRouter);
app.use("/dashboard", dashRouter);
app.listen(5000, () => {
  console.log(`Listening on port : 5000`);
});
