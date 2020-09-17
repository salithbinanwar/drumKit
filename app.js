const express = require('express')
const jquery = require('jquery')
const bodyParser = require("body-parser");
const app = express()
const port = 3000
app.set('view engine', 'ejs');
app.use(express.static("public"));


app.get('/', (req, res) => {
    res.render('index', {

    });
  });



app.listen(port, () => {
  console.log(` app is listening at ${port}`)
})