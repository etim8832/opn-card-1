const cors = require("cors");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const router = require("./src/routes/index");

app.use(express.json());
app.use(cors())
app.use(bodyParser.json());

const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ---> ${port}`)
  app.use('/', router);
})