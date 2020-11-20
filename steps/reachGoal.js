const cucumber = require('cucumber'); 
const Given = cucumber.Given; 
const When = cucumber.When; 
const Then = cucumber.Then;
const expect = require("chai").expect;

Given('I set a goal of {int} cups of coffee', function (int) {
    let goal = 4;  
    return goal;
});
       
When('I log {int} cups of coffee', function (int) {
    let log = 4;  
    return log;
});

Then('I recieve an alert congratulating me for reaching my goal', function () {
    let know = "congratulations, you met your goal"; 
    return know;
});
