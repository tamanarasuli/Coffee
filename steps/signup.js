const cucumber = require('cucumber'); 
const Given = cucumber.Given; 
const When = cucumber.When; 
const Then = cucumber.Then;
const expect = require("chai").expect;
const change =  require("../static/track.js");

let email;
let username; 
let password; 
Given('user wants to input email, username, password', function () {
    email = "tmana@gmail.com"; 
    username = "trm001"; 
    password = "123mfjf"; 
});
       
//   ? When the user clicks add cup
//       Undefined. Implement with the following snippet:

let url; 
When('the user hits signup', function () {
    url = change.insert(email, username, password); 
});
       
//   ? Then "/insertData/name/goal/intake/";
//       Undefined. Implement with the following snippet:
 
Then('{string} is returned', function (str) {
    expect(url).to.equal(str); 
});