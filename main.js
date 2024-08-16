const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express()
const port = 4000

app.use(cors());

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

//categories dotor orj irsen string-iig zuw JSON bolgon hurwuulne.
let categories = JSON.parse(content)

// ene-iig unshuulahiin tuld 

app.get("/categories/list", (req, res)=> {
  res.json(categories);
});

// herev 1 shirhegiig awya gewel
app.get("/categories/:id", (req, res)=> {
  const { id } = req.params;
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

app.post("/categories/", (req, res)=> {
  const { name } = req.body;
  categories.push ({ id: new Date().toISOString(),name: name });
  fs.writeFileSync("categories.json", JSON.stringify(categories)) //data.json dotor 
  res.json(["Success"]);
;})

// za eniigee front-end-teigee holboyo

////////////////////////////////////////
// UPDATE HIIH !!!

app.put("/categories/:id", (req, res)=> {
  const { id } = req.params;
  const { name } = req.body;
  const index = categories.findIndex((cat)=>(cat.id===id));
  categories[index].name = name;
  fs.writeFileSync("categories.json", JSON.stringify(categories))
  res.json(["Success"]);
;})

///////////////////////////////////////////
// DELETE HIIH !!!

app.delete("/categories/:id", (req, res)=> {
  const { id } = req.params;
  categories = categories.filter((cat)=>(cat.id !== id));
  fs.writeFileSync("categories.json", JSON.stringify(categories))
  res.json(["Success"]);
;})

