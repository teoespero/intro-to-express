// Teo Espero
// BS Cloud and Systems Administration
// Western Governors University

// #Web-Dev-Bootcamp-Udemy
// this demo app is created to show how routes are
// handled using express.js


// load our package
var express = require("express");

// define our express object
var app = express();

//////////////////////////////////////////////////////////////////////
// route codes


// '/' say display a message at the root
app.get("/", function(request, response){
     console.log("Request made to '/'");
     response.send("Hi There! Welcome to my assignment.");
});

// '/speak' say display a message at the root
app.get("/speak/:theSubDomain", function(request, response){
     var subDomain = request.params.theSubDomain;
     
     subDomain = subDomain.toLowerCase();
     
     console.log("Request made to sub '/speak/" + subDomain +"'");
     if (subDomain == "pig"){
          response.send("The pig says 'Oink!'");
     }
     else if (subDomain == "cow"){
          response.send("The cow says 'Moo!'");
     }
     else if (subDomain == "dog"){
          response.send("The dog says 'Woof! Woof!'");
     }
});

// '/repeat' route
// this repeats the words 'hello' or 'blah'
// depending on the number passed on to it
// e.g. /repeat/hello/4 would output
// 'hello! hello! hello! hello!'
app.get("/repeat/:sayWhat/:howMany", function(request, response){
     
     // we need to know how many times we need to
     // repeat the 'hello' or 'blah'
     var limit = Number(request.params.howMany);
     
     // get the word to repeat
     var theWord = request.params.sayWhat;
     
     // make our route case insensitive
     theWord = theWord.toLowerCase();
     
     // this will only trigger if the word used
     // is 'hello' or 'blah' and if the number is indicated
     if (((theWord == "hello" || theWord == "blah") && limit > 0)){
          console.log("Request made to sub '/"+ theWord + "/" + limit +"'");
          
          var newTextRepeated = "";
          for (var looper = 0; looper < limit; looper++){
               newTextRepeated = newTextRepeated + theWord + "! ";
          }
          response.send(newTextRepeated);
     }
});

// define a catch all
app.get("*", function(request, response){
     console.log("Server Request sent to an undefined sub...");
     response.send("Page not found");
});

app.listen(process.env.PORT, process.env.IP, function(){
     console.log("Server running...");
});
