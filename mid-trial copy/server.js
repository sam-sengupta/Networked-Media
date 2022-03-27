const express = require("express")
const bodyParser = require("body-parser")
var urlencodedParser = bodyParser.urlencoded({ encoded: true})

var app = express()
app.use(express.static("public"))
app.use(urlencodedparser)
app.set("view engine", "ejs")

app.get("/", function(request, response) {
    response.render("index.ejs", {})
})

var data = []
app.post("/upload", function(request, response) {
    console.log(request.body)
    var now = new Date()
    var mesage = {
        text: request.body.text,
        date: now.toLocaleString()
    }
    DataTransfer.push(message)
    response.redirect("/")
})

app.listen(5001, function() {
    console.log("Server is listening on port 5000!!")
})

