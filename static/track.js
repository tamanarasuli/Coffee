// test to see if it reads the console line

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
 

function setup() {
    console.log("I have linked Javascript!");
    //var name = $("username").val();
    //console.log(name);
    // console.log($("#username").val());
    // let name = $("#username").val(); 
    // console.log(name); 
     
    //send("x",1,1);
    //  $("#intake").click(send($("#username").val(), $("quantity").val(), $("quantity").val()));
    
      $("#intake").click(send());
}

$(document).ready(setup);


