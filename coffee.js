// create requirements and define server 
const express = require('express');
const app = express();
const port = 80;
//const sqlite3 = require('sqlite3'); 

/**
 * The index function redirects the user to request "coffee.html"
 */
 
function coffee(req, res) {
    res.redirect('/coffee.html');
}

app.use(express.static("static"));

// Calling "/" invokes the index function
app.get('/', coffee);


    // create database
    
    const sqlite3 = require('sqlite3').verbose();
    let db = new sqlite3.Database(
        "./coffee.db",
        sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
        (err) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log("Connected to db");
            }
        }
    );
    
db.run(
    'CREATE TABLE IF NOT EXISTS user(ounces, name)',
    [],
    (err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log("Table created");
        }
    }
);
    
    // create table if not yet created
    

// listen in on port

app.listen(port, function() {
    console.log("App running at port=" + port);
});