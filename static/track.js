/**
 * get url and replace  for the insertData"
 */
 

function send(name, goal, intake) {
    if (name == ""){
        return;
    
    } else {
        
         let url = "/insertData/name/" + name + "/goal/" + goal + "/intake/" + intake;
    
        if (typeof window == "undefined") {
            return url; 
        } else {
            console.log(url); 
            window.location.replace(url); 
        }
    }
    
}

/**
 * get url and replace for the insert in signup"
 */

function insert(email, username, password) {
      let url = "/insertSignUp/email/" + email + "/username/" + username + "/password/" + password;
      console.log(url); 
      window.location.replace(url);
      console.log("made it to the insert to the signup function"); 
}

/**
 *Error handling"
 */
 
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
    else {
        insert(email, username, password); 
    }
}

/**
 * call negative and define values "
 */
function handleRespones() {
    let name =$("#username").val();
    let goal = $("#quantity").val();
    let intake = $("#goal").val(); 
    negative(); 
}

/**
 * check error handling when the button is pressed"
 */
 
function setup() {
    console.log("I have linked Javascript!");
    $("#intake").click(handleRespones);
    $('#signup').click(signUp);
}

if (typeof window == "undefined") {
    exports.send = send; 
} else {
    $(document).ready(setup);  
}





