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
let toHide = true;
function insert() {
    let name = "tamana"; 
    let goal = 5; 
    let intake = 3; 
    let storedResults = null;
    db.serialize(() => {
// let sql = 'INSERT INTO user(name, goal, intake) ' +
//  'VALUES("' + req.params.name + '", "' + req.params.goal + '",  "' + req.params.intake + '");'; 
// console.log(sql);
let sql = 'INSERT INTO user(name, goal, intake) ' +
'VALUES("' + name + '", "' + goal + '",  "' + intake + '");'; 
console.log(sql);
db.run(sql, [], (err) => {
    if (err) {
        console.error(err.message);
        
        
    }
    
}
);

        
    });
}

//function setup() {
//    $("#button").click(insert);
    
}

    
    // create table if not yet created
    

// listen in on port

app.listen(port, function() {
    console.log("App running at port=" + port);
});