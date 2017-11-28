const express = require('express');
const app = express();
const bodyParser = require("body-parser")
const fs = require("fs")
app.use(bodyParser.urlencoded({extended: false}))

app.set('view engine', 'pug')

// => is newest notation for 'function' in JS!

app.get("/", (request, response) => {
	response.render("index", {});
    });

app.get("/username", (request, response) => {
    fs.readFile('users.json', function(err, data) {
            if (err) {
                throw err;
            }

            var theData = JSON.parse(data);
            response.render("username", {theData: theData});
    })

});

app.get("/search", (request, response) => {
	response.render("search", {title: "Search page",
								})
})

app.post("/search", (request, response) => {
    console.log("at the post office")
    fs.readFile('users.json', function(err, data) {
        if (err) {
            throw err;
        }
        var allContent = request.body
        console.log(request.body)
        var userList = JSON.parse(data)
        var usersSug = []
        for (var i = 0; i < userList.length; i++){
            if (request.body.autocomplete === userList[i].firstname || request.body.autocomplete === userList[i].lastname || request.body.autocomplete === userList[i].email){
                usersSug.push({
                    firstname: userList[i].firstname,
                    lastname: userList[i].lastname
                })
                console.log("User found")
            }
        } 
        console.log("The suggestions:", usersSug)
        response.status(200).send({search: usersSug})
});

})


app.get("/found", (request, response) => {
    response.render("found", {title: "Found page",
                                })
})

app.get("/add_user", (request, response) => {
    
    response.render("add_user", {title: "Add user page"
                                })
})

app.post("/make", function (request, response) {
fs.readFile('./users.json', function (err, data) {
                if (err) {
                throw err;
            }
    var json = JSON.parse(data)
    var obj = request.body
    json.push(obj)
    console.log(json)

    fs.writeFile("./users.json", JSON.stringify(json))
})

response.redirect("/username")  

})


app.listen(3000, ()=>{
    console.log("Miracle happens on port 3000 =] ")
})