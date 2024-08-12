const express = require('express');
const cors = require('cors');

const app = express()
const port = 4000

app.use(cors());

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