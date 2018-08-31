// Teo Espero
// BS Cloud and Systems Administration
// Western Governors University

// #Web-Dev-Bootcamp-Udemy

// load our package
var express = require("express");
var app = express();

//////////////////////////////////////////////////////////////////////
// route codes

// '/' say display a message at the root
app.get("/", function(request, response){
     console.log("Request made to '/'");
     response.send("Hi There!");
});

// '/name' say display a message at the root
app.get("/name", function(request, response){
     console.log("Request made to '/name'");
     response.send("Teo Espero");
});

// '/major' say display a message at the root
app.get("/major", function(request, response){
     console.log("Request made to '/major'");
     response.send("BS Cloud and Systems Administration");
});

// '/university' say display a message at the root
app.get("/university", function(request, response){
     console.log("Request made to '/university'");
     response.send("Western Governors University");
});

// '/university' say display a message at the root
app.get("/r/:anythingelse", function(request, response){
     var subDomain = request.params.anythingelse;
     console.log("Request made to sub '/r/" + subDomain +"'");
     response.send("Hello from 'sub /r/"+ subDomain +"'");
});

// '/university' say display a message at the root
app.get("/r/:anythingelse/comments/:posts", function(request, response){
     var subDomain = request.params.anythingelse;
     var subSubDomain = request.params.posts;
     console.log("Request made to sub '/r/" + subDomain + "/comments/" + subSubDomain + "'");
     response.send("Hello from sub '/r/" + subDomain + "/comments/" + subSubDomain + "'");
});


// define a catch all
app.get("*", function(request, response){
     console.log("Server Request sent to an undefined sub...");
     response.send("404 Request not found");
});

app.listen(process.env.PORT, process.env.IP, function(){
     console.log("Server running...");
});
