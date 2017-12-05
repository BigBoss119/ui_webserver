const express = require('express');
const app = express();
const bodyParser = require("body-parser")
const fs = require("fs")
const cookieParser = require("cookie-parser")
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
        var userList = JSON.parse(data)
        var allContent = request.body.searchData
        var usersSug = []
        
        for (var i = 0; i < userList.length; i++){
            if (allContent === userList[i].firstname.slice(0, allContent.length).toLowerCase() || allContent === userList[i].lastname.slice(0, allContent.length).toLowerCase() || allContent === userList[i].email.slice(0, allContent.length).toLowerCase()){
                usersSug.push(userList[i].firstname + " " + userList[i].lastname
                )
                console.log("User found")
            }
        } 
        console.log("The suggestions:", usersSug)
        response.json({status:200, search: usersSug})
        // response.status(200).send({search: usersSug})
});
})


app.post("/found", function (request, response) {
    fs.readFile('users.json', function(err, data) {
            if (err) {
                throw err;
            }
            var theData = JSON.parse(data);
            for (var i = 0; i < theData.length; i++) {
                if (request.body.input === theData[i].firstname.toLowerCase() || request.body.input === theData[i].lastname.toLowerCase() || request.body.input === theData[i].email.toLowerCase() || request.body.input === theData[i].firstname.toLowerCase() + " " + theData[i].lastname.toLowerCase()) {   
                    var firstName = theData[i].firstname;
                    var secondName = theData[i].lastname;
                    var emails = theData[i].email;
                } console.log(firstName + secondName + emails)
            } response.render("found", {  
                firstname: firstName,
                secondname: secondName,
                email: emails,
                })  

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






















