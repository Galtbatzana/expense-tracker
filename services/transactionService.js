const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { sql } = require("../configs/database");

async function createTransaction(input) {
  //   const { name } = newTransaction;

  const input1 = {
    id: uuidv4(),
    amount: 1000,
    type: "EXPENSE",
    payee: "Sarnai",
  };

  //   const columns = Object.keys(input).join(", ");

  await sql`insert into transaction ${sql(input1, Object.keys(input1))}`;

  //   console.log({ columns });
  return "";
}

module.exports = {
  createTransaction,
};
