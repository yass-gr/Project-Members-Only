const db = require("./pool.js");

const addUser = async (name, email, password, isAdmin) => {
  await db.query(
    "INSERT INTO users (name, email, password, isadmin) values ($1, $2, $3, $4);",
    [name, email, password, isAdmin],
  );
};

module.exports = addUser;
