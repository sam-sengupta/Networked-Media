var express = require("express")

var app = express()

var allResponses = [];

app.use(express.static("public"))

app.get("/", function (request, response) {
    response.send("Testing: server is working!! :D")
})

app.get("/random", function(request, response) {
    var filename;
    if (Math.random() < 0.5) {
        filename = "1.png"
    }
    else {
        filename = "2.png"
    }
    response.sendFile("1.png", { root: 'public'})
})

app.get("/submit", function(request, response) {
    console.log(request.query)
    allResponses.push({
        name: request.query.username,
        text: request.query.message
    })
    response.send("Thank you for your submission, " + request.query.username + ".")
})

app.get("/message", function(request, response) {
    var r = ""
    for (var i = 0; i < allResponses.length; i++) {
        r = r + allResponses[i].name + " said " + allResponses[i].text
        r = r + "<br/>"
    }
})

app.listen(5000, function () {
    console.log("Server Started!!")
})