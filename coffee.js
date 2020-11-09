// create requirements and define server 
const express = require('express');
const app = express();
const port = 80;
//const sqlite3 = require('sqlite3'); 

/**
 * The coffee function redirects the user to request "coffee.pug"
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
        "./coffeeTracker.db",
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
    'CREATE TABLE IF NOT EXISTS user(name, goal, intake)',
    [],
    (err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log("Table created");
        }
    }
);


function insert() {
    // let name = "tamana"; 
    // let goal = 5; 
    // let intake = 3; 
    db.serialize(() => {
        let sql = 'INSERT INTO user(name, goal, intake) ' +
        'VALUES("' + req.params.name + '", "' + req.params.goal + '",  "' + req.params.intake + '");'; 
            console.log(sql);
// let sql = 'INSERT INTO user(name, goal, intake) ' +
// 'VALUES("' + name + '", "' + goal + '",  "' + intake + '");'; 
            console.log(sql);
    db.run(sql, [], (err) => {
        if (err) {
            console.error(err.message);
        }
    });

    });
}


// function setup() {
//     $("#intake").click(insert);
// }
// app.get ('/', function (req, res){
//     res.render('coffee', {}); 
// }); 
 app.use(express.static("static"));  
// app.set('views', './views') 
//  app.set('view engine', 'pug')
//  app.get('/', coffee);
 app.get('/insert/name/:name/goal/:goal/intake/:intake', insert);
 


app.listen(port, function() {
    console.log("App running at port=" + port);
});