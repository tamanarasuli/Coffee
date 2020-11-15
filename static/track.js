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
    // let name =$("#username").val();
    // let goal = $("#quantity").val();
    //  let intake = $("#goal").val(); 
    let flag = false; 
    if (goal < 0 || intake < 0) {
        alert("Enter a valid cup amount, please "); 
            return true; 
     } else if (goal == null || intake == null) {
         alert("please enter a values ");
     }  else {
          send(name, goal, intake); 
    }
}




function handleRespones() {
    let name =$("#username").val();
    let goal = $("#quantity").val();
     let intake = $("#goal").val(); 
     negative(); 
    // input checks 
    
    
}


 

function setup() {
    console.log("I have linked Javascript!");
    $("#intake").click(handleRespones);
}

$(document).ready(setup);


