const cucumber = require('cucumber'); 
const Given = cucumber.Given; 
const When = cucumber.When; 
const Then = cucumber.Then;
const expect = require("chai").expect;
const stuff =  require("../static/track.js");

let email;
let username; 
let password; 
Given('user wants to input email, username, password', function () {
    email = "tmana@gmail.com"; 
    username = "trm001"; 
    password = "123mfjf"; 
});

let url; 
When('the user hits signup', function () {
    url = stuff.insert(email, username, password); 
});
       
Then('{string} is returned here', function (str) {
    expect(url).to.equal(str); 
});