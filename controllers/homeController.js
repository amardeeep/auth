const db = require("../db/queries");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const emptyErr = "Cannot be empty";
const alphaErr = "Must use alhphabets only .";
const notMatcherr = "Confirm password does not match with password.";
const strongPwdErr =
  "Password is Weak. Make Sure your password contains atleast 1 Lower case Alphabet, 1 Upper Case Alphabet, 1 Number, 1 Symbol and be at least 8 Characters long .";
const validateSignup = [
  body("username").trim().not().isEmpty().withMessage(`Username ${emptyErr}`),
  body("firstname")
    .trim()
    .not()
    .isEmpty()
    .withMessage(`First Name ${emptyErr}`)
    .isAlpha()
    .withMessage(`First Name ${alphaErr}`),
  body("lastname")
    .trim()
    .not()
    .isEmpty()
    .withMessage(`Last Name ${emptyErr}`)
    .isAlpha()
    .withMessage(`Last Name ${alphaErr}`),
  body("password")
    .isStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
    .withMessage(strongPwdErr),
  body("cpassword")
    .custom((value, { req }) => {
      return value === req.body.password;
    })
    .withMessage(notMatcherr),
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .render("sign-up", { title: "Sign Up", errors: errors.array() });
    }
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
