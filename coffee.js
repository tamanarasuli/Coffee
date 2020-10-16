// create requirements and define server 
const express = require('express');
const app = express();
const port = 80;

/**
 * The index function redirects the user to request "coffee.html"
 */
 
function coffee(req, res) {
    res.redirect('/coffee.html');
}

app.use(express.static("static"));

// Calling "/" invokes the index function
app.get('/', coffee);



// listen in on port

app.listen(port, function() {
    console.log("App running at port=" + port);
});