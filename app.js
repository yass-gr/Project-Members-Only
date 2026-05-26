require("dotenv").config();
const express = require("express");

const validateInputsLogin = require("./middlware/validateInputsLogin");
const validateInputsRegister = require("./middlware/validateInputsRegister");
const getMessages = require("./models/getMessages");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.get("/login", (req, res) => {
  res.render("logIn", {
    errors: [],
    email: "",
    password: "",
  });
});
app.get("/register", (req, res) => {
  res.render("register", {
    errors: [],
    email: "",
    password: "",
    admin: "",
    name: "",
  });
});

app.get("/", async (req, res) => {
  const messages = await getMessages();
  res.render("index", { messages: messages });
});
app.post("/login", validateInputsLogin);
app.post("/register", validateInputsRegister);

app.listen(3000, () => {
  console.log("running ...");
});
