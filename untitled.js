const express = require('express');
const app = express();
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded())
app.set('view engine', 'pug')

app.get("/", (request, response) => {
	response.render("index");
    })

app.get("/pokemon", (request, response) => {
	response.send("300");
    })

var server = app.listen(3000, () => {
    console.log('This server is listening at port 3000')
});