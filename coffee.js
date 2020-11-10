const express = require('express');
const app = express();
const port = 80;
//const sqlite3 = require('sqlite3'); 

/**
 * The coffee function redirects the user to request "coffee.pug"
 */
 
function coffee(req, res) {
    res.redirect('./views/coffee.pug');
}


app.use(express.static("static"));

// Calling "/" invokes the index function
//app.get('/', coffee);

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
function coffee(req, res){
    insert(req, res);
}
function insert(req, res) {
    db.all(
        'SELECT * FROM user', [], (err, rows) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log("Got all answers:");
                console.log(rows);
                console.log("Sending response");
                let args = {
                    title: "Coffee Tracker",
                    result: rows,
                }
                res.render('coffee', args);
            }
        }
    );
}



// function insert() {
//     let name = "tamana"; 
//     let goal = 5; 
//     let intake = 3; 
//      db.serialize(() => {
         
//          let sql = 'INSERT INTO user(name, goal, intake) ' +
//          'VALUES("' + name + '", "' + goal + '",  "' + intake + '");'; 
//          console.log(sql);
//          db.run(sql, [], (err) => {
//              if (err) {
//                  console.error(err.message);
                
//              }
            
//          });
//      });
//  }





// function setup() {
//     $("#intake").click(insert);
// }
//app.get('/', function(req, res){
 //   res.render('coffee', {}); 
   
// });

// app.get ('/', function (req, res){
//     res.render('coffee', {}); 
// }); 
app.use(express.static("static"));  
app.set('views', './views') 
app.set('view engine', 'pug')
app.get('/', coffee);
app.get('/insert/name/:name/goal/:goal/intake/:intake', insert);
 


app.listen(port, function() {
    console.log("App running at port=" + port);
});
