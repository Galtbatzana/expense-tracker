const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { sql } = require("../configs/database");

async function createTransaction() {
  //   const { name } = newTransaction;

  const input = {
    id: uuidv4(),
    amount: 1000,
    type: "EXPENSE",
  };

  // await sql`insert into transaction(id, amount, categoryID, type, date, payee, note) values (${id}, ${name}, ${icon}, ${color})`;

  const columns = Object.keys(input).join(", ");

  console.log({ columns });
}

module.exports = {
  createTransaction,
};
