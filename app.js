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

app.get("/found", (request, response) => {
    response.render("found", {title: "Found page",
                                })
})

app.get("/add_user", (request, response) => {
    
    response.render("add_user", {title: "Add user page"
                                })
})


app.post("/found", function (request, response) {
    fs.readFile('users.json', function(err, data) {
            if (err) {
                throw err;
            }
            var theData = JSON.parse(data);
            for (var i = 0; i < theData.length; i++) {
                if (request.body.input === theData[i].firstname || request.body.input === theData[i].lastname || request.body.input === theData[i].email) {   
                    var firstName = theData[i].firstname;
                    var secondName = theData[i].lastname;
                    var emaill = theData[i].email;
                } else if {
                  alert("There is no match found.")
                }
            } response.render("found", {  
                firstname: firstName,
                secondname: secondName,
                email: emaill,
                })  
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


var server = app.listen(3000, () => {
    console.log('This server is listening at port 3000')
});

// isLoggedIn: false, shoppinglist: "shoppinglist"
// title: "peters home", user: "peter", 