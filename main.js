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
const categories = JSON.parse(content)

// ene-iig unshuulahiin tuld 

app.get("/categories/list", (req, res)=> {
  res.json(categories);
});

//////////////////////////////////////////////////

// app.get("/categories/create", (req, res)=> {
//   categories.push({ name: "New Categories" });
//   res.json(["Success"]);
// ;})


////////////////////////////////////////////////////
// herev hussen zuilee bichsen zuilee gargii gevel ingej bichne
// data-gaa uuruu zohiogood tsaanaa hadgalj chadaj bn

app.get("/categories/create", (req, res)=> {
  const { name } = req.query;
  categories.push({ name: name });

  fs.writeFileSync("categories.json", JSON.stringify(categories)) //data.json dotor 

  res.json(["Success"]);
;})

// za eniigee front-end-teigee holboyo




////////////////////////////////////////
// UPDATE HIIH !!!

app.get("/categories/update", (req, res)=> {
  // categories.push({ name: "New Categories" });
  // TODO 
  res.json(["Success"]);
;})


///////////////////////////////////////////
// DELETE HIIH !!!

app.get("/categories/delete", (req, res)=> {
  // categories.push({ name: "New Categories" });
  // TODO 
  res.json(["Success"]);
;})

