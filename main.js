// const { startApp } = require('./configs/basic');
// const { getCategories, createNewCategory, getOneCategory, updateCategory, deleteCategory } = require('./services/categoryService');

// const app = startApp();

const { app } = require("./configs/basic");
const { sql } = require("./configs/database");

const {
  getCategories,
  createCategory,
  getOneCategories,
  deleteOneCategory,
  updateOneCategories,
} = require("./services/categoryService");

//////////////////////////////////////////////////////////
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/articles', (req, res) => {
//   // todo
//   // data base

//   res.json([
//     {id: 1, title: 'Hello'},
//     {id: 2, title: 'World'},
//   ]);
// })

////////////////////////////////////////////////////////
// RAM, FILE, REMOTE
// C.R.U.D = Create, Read, Update, Delete

///////////////////////////////////////////////////////
// app.get("/categories", (req, res)=> {
//   const categories = getCategories();
//   res.json(categories);
// });

////////////////////////////////////////////////////////
// herev 1 shirhegiig awya gewel
// app.get("/categories/:id", (req, res)=> {
//   const { id } = req.params;
//   const one = getOneCategory(id);
//   res.json(one);
// });

//////////////////////////////////////////////////

// app.get("/categories/create", (req, res)=> {
//   categories.push({ name: "New Categories" });
//   res.json(["Success"]);
// ;})

////////////////////////////////////////////////////
// herev hussen zuilee, bichsen zuilee gargii gevel ingej bichne
// data-gaa uuruu zohiogood tsaanaa hadgalj chadaj bn
// !!! herev dahin davtagdashgui id: tai baiwal delete/edit hiih bolomjtoi bolno!!!!

// ene function ni 1 yum awlaa butsaalaa tegeed boloo ///////
// createNewCategory function ni tsaashaa hadgaldag uildel hiij bga//
// app.post("/categories", async (req, res)=> {
//   const { name } = req.body;
//   const id = await createNewCategory({ name });
//   res.status(201).json({ id });
// });

// za eniigee front-end-teigee holboyo

////////////////////////////////////////
// UPDATE HIIH !!!

// app.put("/categories/:id", async (req, res)=> {
//   const { id } = req.params;
//   const { name } = req.body;
//   if (!name) {
//     res.status(404).json({message: "`Name` field is required!"});
//     return;
//   }
//   await updateCategory(id, name);
//   res.sendStatus(204);
// });

///////////////////////////////////////////
// DELETE HIIH !!!

// app.delete("/categories/:id", async (req, res)=> {
//   const { id } = req.params;
//   await deleteCategory(id);
//   // if (deleteIndex < 0) {
//   //   res.sendStatus(404);
//   //   return;
//   // }
//   res.sendStatus(204);
// ;})

//////////////////////////////////////////////////////////////////////
/////////////////jinhen database-tei holbogdoh///////////////////////

////////////GET/////////////////////////////////////////////////////
app.get("/categories", async (req, res) => {
  const list = await getCategories();
  res.json(list);
});
/////////////GET ONE////////////////////////////////
app.get("/categories/:id", async (req, res) => {
  const { id } = req.params;
  const one = await getOneCategories(id);
  if (!one) {
    res.status(404).json({ message: "Not found!" });
    return;
  }
  res.json(one);
});
/////////////////DELETE DATA//////////////////////
app.delete("/categories/:id", async (req, res) => {
  const { id } = req.params;
  await deleteOneCategory(id);
  res.status(201).json("success");
});
//////////////EDIT DATA///////////////////////////
app.put("/categories/:id", async (req, res) => {
  const { id } = req.params;
  const input = req.body;
  await updateOneCategories(id, input);
  res.status(204).json("success");
});
///////////////////Create////////////////////////////
app.post("/categories", async (req, res) => {
  const input = req.body;
  const id = await createCategory(input);
  res.status(201).json({ id });
});

///////////////TEST////////////////////////

// app.get("/dbtest", async (req, res) => {
//   const result = await sql`select version()`;
//   console.log(result);
//   res.json({ result });
// });
