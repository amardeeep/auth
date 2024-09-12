const db = require("../db/queries");
const getDash = async (req, res) => {
  const { rows } = await db.getMessages();
  res.render("dash", { title: "Dashboard", messages: rows });
};
module.exports = { getDash };
