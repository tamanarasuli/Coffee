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
}

$(document).ready(setup);


