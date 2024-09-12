const pool = require("./pool");
const getMessages = async () => {
  console.log(await pool.query(`SELECT * from messages`));
};
const createUser = async (username, firstname, lastname, password) => {
  await pool.query(
    `insert into users (username,firstname,lastname,status,password)
        values ($1,$2,$3,$4,$5)`,
    [username, firstname, lastname, false, password]
  );
};
module.exports = {
  getMessages,
  createUser,
};
