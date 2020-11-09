// test to see if it reads the console line

console.log("Hello world");

function send(name, goal, intake) {
    let url = "/insert/name/" + name + "/goal/" + goal + "/intake/" + intake;
    console.log(url);
    window.location.replace(url);
}
 

function setup() {
    console.log("I have linked Javascript!");
}

function setup() {
    $("#intake").click(insert);
}

$(document).ready(setup);


 // will modify will send answer or response to user once it has been calculated or reviewed 
// function send(op, num1, num2) {
//     let url = "/calculate/op/" + op + "/num1/" + num1 + "/num2/" + num2;
//     console.log(url);
//     $.get(url, success);
// }