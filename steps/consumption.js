// // ? Given user wants to input name, goal, intake
// //       Undefined. Implement with the following snippet:
const cucumber = require('cucumber'); 
const Given = cucumber.Given; 
const When = cucumber.When; 
const Then = cucumber.Then;
const expect = require("chai").expect;
const change =  require("../static/track.js");
 
let name; 
let goal; 
let intake; 
Given('user wants to input name, goal, intake', function () {
    intake = 5; 
    name = "gigi"; 
    goal = 6; 
});
       
//   ? When the user clicks add cup
//       Undefined. Implement with the following snippet:

let url; 
When('the user clicks add cup', function () {
    url = change.send(name, goal, intake); 
});
       
//   ? Then "/insertData/name/goal/intake/";
//       Undefined. Implement with the following snippet:
 
Then('{string} is returned', function (string) {
    expect(url).to.equal(string); 
});