console.log("Hello world");

function send() {
    //console.log("name" + name);
    let name =$("#username").val();
    let goal = $("#quantity").val(); 
    let intake = $("#goal").val(); 
    if (name !== ""){
      let url = "/insertData/name/" + name + "/goal/" + goal + "/intake/" + intake;
    console.log(url); 
      window.location.replace(url);
    }
    // let url = "/insert/name/" + name + "/goal/" + goal + "/intake/" + intake;
    // console.log(url);
    // window.location.replace(url);
}
 
function negative(goal, intake) {
    // let word = $("#quantity").val(); 
    let flag = false; 
    if (goal < 0 || intake < 0) {
        flag = true;
         //alert("Enter a valid cup amount, please "); 
        return flag; 
     } else {
         send(name, goal, intake); 
     }
}
exports.negative = negative; 

// function setup() {
//     console.log("I have linked Javascript!");
//     //var name = $("username").val();
//     //console.log(name);
//     // console.log($("#username").val());
//     // let name = $("#username").val(); 
//     // console.log(name); 
     
//     //send("x",1,1);
//     //  $("#intake").click(send($("#username").val(), $("quantity").val(), $("quantity").val()));
    
//       $("#intake").click(send());
// }

//$(document).ready(setup);


