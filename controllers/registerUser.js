const bc = require("bcrypt");
const addUser = require("../models/addUser");

const registerUser = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = await bc.hash(req.body.email, 10);
  const isAdmin = req.body.admin ? true : false;

  try {
    await addUser(name, email, password, isAdmin);
    res.status(200).redirect("/");
    console.log("user added");
  } catch (err) {
    res.status(500).json({ error: "db error" });
    console.log(err);
  }
};

module.exports = registerUser;
