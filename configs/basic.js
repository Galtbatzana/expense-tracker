const express = require('express');
const cors = require('cors');

const app = express()
const port = 4000

app.use(cors());
app.use(express.json());  //backend-ees body awna//


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


module.exports = {
  app,
}


