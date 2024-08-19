const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express()
const port = 4000

app.use(cors());
app.use(express.json());  //backend-ees body awna//

const content = fs.readFileSync("categories.json", "utf-8");
// console.log({ content });

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/articles', (req, res) => {
  // todo 
  // data base

  res.json([
    {id: 1, title: 'Hello'}, 
    {id: 2, title: 'World'},
  ]);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// C.R.U.D = Create, Read, Update, Delete 


// RAM, FILE, REMOTE

///////// Jijiglej bga function, tsoo shine category uusgedeg function hiilee ////////////////////////////
async function createNewCategory(form) {
  const id = uuidv4();
  form.id = id; 
  categories.push(form);
  fs.writeFileSync("categories.json", JSON.stringify(categories));
  return id;
}

function getCategories() {}
function getOneCategory(id) {}
function updateCategory(id, update) {}
function deleteCategory(id) {}


//categories dotor orj irsen string-iig zuw JSON bolgon hurwuulne.
let categories = JSON.parse(content)

// ene-iig unshuulahiin tuld 

app.get("/categories", (req, res)=> {
  res.json(categories);
});

// herev 1 shirhegiig awya gewel
app.get("/categories/:id", (req, res)=> {
  const { id } = req.params;
  const categories = categories.find((cat.id === id))
  res.json(categories);
});

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
app.post("/categories", async (req, res)=> {
  const { name } = req.body;
  const id = await createNewCategory({ name });
  res.status(201).json({ id });
});

// za eniigee front-end-teigee holboyo

////////////////////////////////////////
// UPDATE HIIH !!!

app.put("/categories/:id", (req, res)=> {
  const { id } = req.params;
  const { name } = req.body;
  if (!name) {
    res.status(404).json({message: "`Name` field is required!"});
    return;
  }
  const index = categories.findIndex((cat)=>(cat.id===id));
  categories[index].name = name;
  fs.writeFileSync("categories.json", JSON.stringify(categories));
  res.json(["Success"]);
});

///////////////////////////////////////////
// DELETE HIIH !!!

app.delete("/categories/:id", (req, res)=> {
  const { id } = req.params;
  categories = categories.filter((cat)=> cat.id !== id);

  if (deleteIndex < 0) {
    res.sendStatus(404);
    return;
  }
  categories = categories.filter((cat) => cat.id !== id);
  fs.writeFileSync("categories.json", JSON.stringify(categories));
  res.sendStatus(204);
;})

