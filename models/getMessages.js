const db = require("./pool");

async function getMessages() {
  data = await db.query(
    "SELECT messages.title AS title ,messages.message AS message, users.name AS author  FROM messages JOIN users ON messages.id_author = users.id;",
  );
  return data;
}

module.exports = getMessages;
