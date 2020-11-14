console.log("Hello world");

function send(name, goal, intake) {
     name =$("#username").val();
     goal = $("#quantity").val(); 
     intake = $("#goal").val(); 
    if (name !== ""){
      let url = "/insertData/name/" + name + "/goal/" + goal + "/intake/" + intake;
    console.log(url); 
      window.location.replace(url);
    }
    
}
function negative(goal, intake) {
    let flag = false; 
    if (goal < 0 || intake < 0) {
        alert("Enter a valid cup amount, please "); 
            return true; 
     } else {
         send("intake", name, goal, intake); 
    }
}


function doNegative() {
    negative(goal, intake);
}

 

function setup() {
    console.log("I have linked Javascript!");
    $("#intake").click(doNegative);
}

$(document).ready(setup);


