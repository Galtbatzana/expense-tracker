const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { sql } = require("../configs/database");

///////// Jijiglej bga function, tsoo shine category uusgedeg function hiilee ////////////////////////////
// async function createNewCategory(form) {
//   const categories = getCategories();
//   const id = uuidv4();
//   form.id = id;
//   categories.push(form);
//   fs.writeFileSync("data/categories.json", JSON.stringify(categories));
//   return id;
// }
// //////////////////GETCATEGORY///////////////////////
// function getCategories() {
//   const content = fs.readFileSync("data/categories.json", "utf-8");
//   const categories = JSON.parse(content);
//   return categories;
// }
// ////////////////GETONECATEGORY////////////////Asuuh//???
// function getOneCategory(id) {
//   const categories = categories.find((cat.id === id))
// }
// ////////////////UPDATE//////////////////////////???
// async function updateCategory(id, name) {
//   const categories = getCategories();
//   const index = categories.findIndex((cat)=>(cat.id == id));
//   categories[index].name = name;
//   fs.writeFileSync("data/categories.json", JSON.stringify(categories));
// }
// /////////////////DELETE/////////////////////////////////
// async function deleteCategory(id) {
//   const categories = getCategories()
//   const category = categories.filter((cat)=> cat.id !== id);
//   fs.writeFileSync("data/categories.json", JSON.stringify(category));
// }

// module.exports = {
//   createNewCategory,
//   getCategories,
//   getOneCategory,
//   updateCategory,
//   deleteCategory,
// }

///////////////////CREAT DATA//////////////////////////////////
async function createCategory({ name, icon, color }) {
  const id = uuidv4();
  await sql`insert into category(id, name) values (${id}, ${name}, ${icon}, ${color})`;
  return id;
}
///////////////////////////GET ALL DATA////////////////////////
async function getCategories() {
  const list = await sql`select * from category`;
  return list;
}
///////////////////GET ONE DATA////////////////////////////////
async function getOneCategories(id) {
  const list = await sql`select * from category where id = ${id}`;
  if (list.length) {
    return list[0];
  }
  return null;
}
////////////////////DELETE DATA////////////////////////////////
async function deleteOneCategory(id) {
  await sql`DELETE FROM category WHERE id=${id}`;
}

////////////////////EDIT DATA//////////////////////////////////
async function updateOneCategories({id, name, icon, color}) {
  await sql`update category set name = ${name}, icon = ${icon}, color = ${color} where id = ${id}`;
}


module.exports = {
  createCategory,
  getCategories,
  getOneCategories,
  deleteOneCategory,
  updateOneCategories,
};
