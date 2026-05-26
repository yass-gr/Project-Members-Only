const { body, validationResult } = require("express-validator");

const validateInputsLogin = [
  body("email")
    .notEmpty()
    .withMessage("email is required!")
    .isEmail()
    .withMessage("enter a valid email!")
    .normalizeEmail(),

  body("password")
    .notEmpty()
    .withMessage("password is required!")
    .isLength({ min: 8 })
    .withMessage("password has to be at least 8 chs!")
    .isLength({ max: 20 })
    .withMessage("password too long!"),

  (req, res, next) => {
    const errs = validationResult(req);

    if (!errs.isEmpty()) {
      res.render("logIn", {
        errors: errs.array(),
        email: req.body.email,
        password: req.body.password,
      });
    }
    return next();
  },
];

module.exports = validateInputsLogin;
