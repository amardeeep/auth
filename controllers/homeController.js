const getHome = (req, res) => {
  res.render("home", { title: "Home " });
};
const getLogin = (req, res) => {
  res.render("login", { title: "Login" });
};
const getSignup = (req, res) => {
  res.render("sign-up", { title: "Sign-Up" });
};
module.exports = {
  getHome,
  getLogin,
  getSignup,
};
