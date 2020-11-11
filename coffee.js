const express = require('express');
const app = express();
//const port = 80;


const path = require('path')
const port = process.env.port || 80
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



function insertData(req, res) {
    
    console.log(req.params);
    let name = req.params.name; 
    let goal = req.params.goal; 
    let intake = req.params.intake;
    db.serialize(() => {
    //     let sql = 'INSERT INTO user(name, goal, intake) ' +
    //     'VALUES("' + req.params.name + '", "' + req.params.goal + '",  "' + req.params.intake + '");'; 
    //         console.log(sql);
    //res.redirect('/insertData/name/:name/goal/:goal/intake/:intake', insertData);
let sql = 'INSERT INTO user(name, goal, intake) ' +
'VALUES("' + name + '", "' + goal + '",  "' + intake + '");'; 
            console.log(sql);
<<<<<<< HEAD
            res.redirect('/insertData/name/:name/goal/:goal/intake/:intake', insertData); 
=======
            //  res.redirect('/insertData/name/:name/goal/:goal/intake/:intake', insertData);
>>>>>>> 00fd83850061f0ab4f45943a583f679425fbc458
    db.run(sql, [], (err) => {
        if (err) {
            console.error(err.message);
        // } else {
        //   res.redirect('back'); 
        }
        // res.redirect('/insertData/name/:name/goal/:goal/intake/:intake', insertData); 
    });
    });
<<<<<<< HEAD
    
=======
    res.redirect('/'); 
>>>>>>> 00fd83850061f0ab4f45943a583f679425fbc458
}





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
app.set('views', './views'); 
app.set('view engine', 'pug');

app.get('/', coffee);
app.get('/insertData/name/:name/goal/:goal/intake/:intake', insertData);
 


app.listen(port, function() {
    console.log("App running at port=" + port);
});
