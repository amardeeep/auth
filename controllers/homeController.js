const db = require("../db/queries");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const emptyErr = "Cannot be empty";
const alphaErr = "Must use alhphabets only .";
const validateSignup = [
  body("username").trim().isEmpty().withMessage(`Username ${emptyErr}`),
  body("firstname")
    .trim()
    .isEmpty()
    .withMessage(`First Name ${emptyErr}`)
    .isAlpha()
    .withMessage(`First Name ${alphaErr}`),
  body("lastname")
    .trim()
    .isEmpty()
    .withMessage(`Last Name ${emptyErr}`)
    .isAlpha()
    .withMessage(`Last Name ${alphaErr}`),
  body("password").isStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  }),
  body("cpassword").custom((value, { req }) => {
    return value === req.body.password;
  }),
];
const getHome = (req, res) => {
  res.render("home", { title: "Home" });
};
const getLogin = (req, res) => {
  res.render("login", { title: "Login" });
};
const getSignup = (req, res) => {
  res.render("sign-up", { title: "Sign-Up" });
};
const postSignup = [
  validateSignup,
  async (req, res) => {
    const { username, firstname, lastname, password } = req.body;
    bcrypt.hash(password, 10, async (err, hashedPassword) => {
      await db.createUser(username, firstname, lastname, hashedPassword);
    });

    res.redirect("/");
  },
];
module.exports = {
  getHome,
  getLogin,
  getSignup,
  postSignup,
};
