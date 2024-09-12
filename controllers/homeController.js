const db = require("../db/queries");
const getHome = (req, res) => {
  res.render("home", { title: "Home" });
};
const getLogin = (req, res) => {
  res.render("login", { title: "Login" });
};
const getSignup = (req, res) => {
  res.render("sign-up", { title: "Sign-Up" });
};
const postSignup = async (req, res) => {
  console.log(req.body);
  const { username, firstname, lastname, password } = req.body;
  await db.createUser(username, firstname, lastname, password);
  res.redirect("/");
};
module.exports = {
  getHome,
  getLogin,
  getSignup,
  postSignup,
};
