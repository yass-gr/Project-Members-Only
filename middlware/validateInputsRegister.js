const { body, validationResult } = require("express-validator");

const validateInputsRegister = [
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

  body("name").notEmpty().withMessage("name is required!"),

  body("admin")
    .custom((v) => v != process.env.ADMIN_PASSWORD)
    .withMessage("wrong admin password!"),

  (req, res, next) => {
    const errs = validationResult(req);

    if (!errs.isEmpty()) {
      res.render("register", {
        errors: errs.array(),
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        admin: req.body.admin,
      });
    } else {
      return next();
    }
  },
];

module.exports = validateInputsRegister;
