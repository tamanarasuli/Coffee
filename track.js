// test to see if it reads the console line
console.log("Hello world"); 

// create a success 
function success(data) {
    console.log("success=" + data);
    $("#answer").text("Answer=" + data);
}


 // will modify will send answer or response to user once it has been calculated or reviewed 
// function send(op, num1, num2) {
//     let url = "/calculate/op/" + op + "/num1/" + num1 + "/num2/" + num2;
//     console.log(url);
//     $.get(url, success);
// }