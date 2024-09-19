const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { sql } = require("../configs/database");

////////////////////////////////////////////////////////
async function createTransaction() {
  const input1 = {
    id: uuidv4(),
    amount: 2000,
    type: "EXPENSE",
    payee: "Naraa",
  };
  //   const columns = Object.keys(input).join(", ");

  await sql`insert into transaction ${sql(input1, Object.keys(input1))}`;
  //   console.log({ columns });
  return "";
}

async function getTransaction() {
  const list = await sql`select * from transaction`;
  return list;
}

async function getOneTransaction(id) {
  const list = await sql`select * from transaction where id = ${id}`;
  if (list.length) {
    return list[0];
  }
  return null;
}

async function deleteOneTransaction(id) {
  await sql`DELETE FROM transaction WHERE id=${id}`;
}

async function updateOneTransaction(id, input) {
  const { name, icon, color } = input;
  await sql`update transaction set name = ${name}, icon = ${icon}, color = ${color} where id = ${id}`;
  // console.log({ icon, color });
}

module.exports = {
  createTransaction,
  getTransaction,
  getOneTransaction,
  deleteOneTransaction,
  updateOneTransaction,
};
