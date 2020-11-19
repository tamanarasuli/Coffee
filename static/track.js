console.log("Hello world");

function send(name, goal, intake) {
    //  name =$("#username").val();
    //  goal = $("#quantity").val(); 
    //  intake = $("#goal").val(); 
    if (name !== ""){
      let url = "/insertData/name/" + name + "/goal/" + goal + "/intake/" + intake;
    console.log(url); 
      window.location.replace(url);
    }
    
}

function insert(email, username, password) {
      let url = "/insertSignUp/email/" + email + "/username/" + username + "/password/" + password;
    console.log(url); 
      window.location.replace(url);
      console.log("made it to the insert to the signup function"); 
    
}


// create  this function for all error handling 
function negative(name, goal,  intake) {
    name =$("#username").val();
    goal = $("#quantity").val();
    intake = $("#goal").val(); 
    let flag = false; 
    if (goal < 0 || intake < 0) {
        alert("Enter a valid cup amount, please "); 
            return true; 
     } if (goal == 0 || intake == 0 || name == " ") {
         alert("please enter a values ");
         return true; 
     } if (intake > goal) {
         alert("Sorry, you did not meet your goal"); 
         send(name, goal, intake); 
    } else {
        alert("Congratulations, you have met your goal!"); 
          send(name, goal, intake); 
    }
}

function signUp(email, name, password) {
    console.log("in signup");
    email = $("#email").val(); 
    username = $("#name").val(); 
    password = $("#pass").val(); 
    console.log(email); 
    
    if(password == " " || username == " " || email == " ") {
        alert("enter a password, please"); 
    }
    // if (password.length() <  8) {
    //     alert("enter at least 8 characters, please"); 
    // }
    // if(email.charAt(i)!= '@') {
    //     alert("please type in a valid email address.");
    
        else {
        insert(email, username, password); 
    }
}



// send to all error handling to be checked 
function handleRespones() {
    let name =$("#username").val();
    let goal = $("#quantity").val();
     let intake = $("#goal").val(); 
     negative(); 
    // input checks 
    
    
}


 
// check error handling when add cup is pressed
function setup() {
    console.log("I have linked Javascript!");
    $("#intake").click(handleRespones);
    $('#signup').click(signUp);
}

$(document).ready(setup);


