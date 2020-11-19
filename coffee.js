const express = require('express');
const app = express();
const path = require('path');
let PORT = process.env.PORT || 80;


/**
 * Connect and create database if not exists"
 */
 


app.use(express.static("static"));


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
    
    
/**
 * Create tables for the user and for the signup"
 */
 
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




db.run(
    'CREATE TABLE IF NOT EXISTS signup(email, username, password)',
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


/**
 * renders the pug"
 */
 
 
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




/**
 * inserts the data from the main coffee tracker UI"
 */


function insertData(req, res) {
    console.log(req.params);
    let name = req.params.name; 
    let goal = req.params.goal; 
    let intake = req.params.intake;
    db.serialize(() => {
let sql = 'INSERT INTO user(name, goal, intake) ' +
'VALUES("' + name + '", "' + goal + '",  "' + intake + '");'; 
            console.log(sql);
db.run(sql, [], (err) => {
    if (err) {
         console.error(err.message);
        }
        
        });
    });

    res.redirect('/'); 

}

/**
 * inserts the signup from the user"
 */


function insertSignUp(req, res) {
    let email = req.params.email; 
    let username = req.params.username; 
    let password = req.params.password; 
    console.log("got to the insert signup page"); 
    db.serialize(() => {
        let sql = 'INSERT INTO signup(email, username, password) ' +
        'VALUES("' + email + '", "' + username + '", "'  + password + '");'; 
        console.log(sql);
    db.run(sql, [], (err) => {
        if (err) {
            console.error(err.message);
        }
         
        });
    });
    res.redirect('/'); 
}


/**
 * redirects pages and gets the urls for server side"
 */



app.use(express.static("static"));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function(req, res){
  res.render('page1', {
    title: 'Login'
  });
});

app.get('/signup', function(req, res){
  res.render('anotherpage', {
    title: 'Sign Up'
  });
});

app.get('/home', function(req, res){
  res.render('coffee', {
    title: 'Home'
  });
});

app.get('/home', function(req, res){
  res.render('anotherpage', {
    title: 'Home'
  });
});

app.get('/insertData/name/:name/goal/:goal/intake/:intake', insertData);
app.get('/insertSignUp/email/:email/username/:username/password/:password', insertSignUp);


app.listen(PORT, function() {
    console.log("App running at port=" + PORT);
});
