var express = require("express")

var app = express()

var allResponses = [];

app.use(express.static("public"))
app.set("view engine", "ejs")

// app.get("/", function (request, response) {
//     response.send("<h1>This is the root path</h1>")
// })

// app.get("/random", function(request, response) {
//     var filename;
//     if (Math.random() < 0.5) {
//         filename = "1.png"
//     }
//     else {
//         filename = "2.png"
//     }
//     response.sendFile("1.png", { root: 'public'})
// })

// function myFunction() {
//     window.location.href="index2.html";  
// }
app.get("/submit", function(request, response) {
    var fileToSend = "index2.html"
    console.log(request.query)
    allResponses.push({
        name: request.query.username,
        text: request.query.message
    })
    response.sendFile(fileToSend, { root: "./public" })
    // response.send("Thank you for your submission, " + request.query.username + ".")
})

// app.get('/templatetest', function(request, response) {
//     var data = {
// 			message: "This is my message to you!"
// 		};
//     response.render('template.ejs', data);
// });

// app.get("/message", function(request, response) {
//     var r = ""
//     for (var i = 0; i < allResponses.length; i++) {
//         r = r + allResponses[i].name + " said " + allResponses[i].text
//         r = r + "<br/>"
//     }
// })

app.listen(5000, function () {
    console.log("Server Started!!")
})




// const express = require('express')

// var app = express()
// app.use(express.static('public'))

// var receivedData = []

// // This is the endpoint which receives the form's submitted data.
// app.get("/submit", function(request, response) {
//     // Since our form's method is GET, we use app.get to handle the request.
//     // Our form's action attribute is "/submit", so 
// 		// the endpoint we create is called "/submit".

//     // request.query contains the data that was submitted in the form.
//     console.log(request.query)

//     // The "name" attribute on items inside of the form serves as the key inside of the request.query object.
//     // For example, our <textarea> element which holds the message has a name attribute of "message",
//     // So we can access its value (the text entered by the user) through "request.query.message".
//     console.log(request.query.message)

//     // We add all of our data to an array, so we can also display it through the /messages endpoint.
//     receivedData.push({
//         user: request.query.username,
//         message: request.query.message
//     })
		
// 		// We add a personalized follow-up message.
//     response.send('Thank you for your submission, ' + request.query.username)
// })

// // This is an endpoint we can access to view all messages.
// app.get('/messages', function(request, response) {
//     if (receivedData.length == 0) {
//         // If we don't have any data, we send an appropriate message
//         response.send("No messages yet...")
//     } else {
//         // Otherwise, we build a string containing the usernames and messages.
//         var r = ""
//         for (var i = 0; i < receivedData.length; i++) {
//             var currentData = receivedData[i]
//             r = r + currentData.user + " said: " + currentData.message + "<br/>"
//         }
    
//         response.send(r)    
//     }

// }) 

// app.listen(5000, function() {
//     console.log("App listening on port 5000")
// })