async function getMessages() {
  data = await db.query("SELECT * FROM messages;");
  return data;
}

module.exports = getMessages;
