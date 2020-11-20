// // Scenario: A user attempts to log their coffee intake # features/log.feature:2
// //   ? Given I drank 3 cups of coffee today
// //       Undefined. Implement with the following snippet:
const cucumber = require('cucumber'); 
const Given = cucumber.Given; 
const When = cucumber.When; 
const Then = cucumber.Then;
const expect = require("chai").expect;

 //const send = require("./track.js");


Given('I set a goal of {int} cups of coffee', function (int) {
         // Given('I set a goal of {float} cups of coffee', function (float) {
          // Write code here that turns the phrase above into concrete actions
          let goal = 4;  
          return goal;
         });
       
//   ? When I log 4 cups of coffee
//       Undefined. Implement with the following snippet:

         When('I log {int} cups of coffee', function (int) {
         // When('I log {float} cups of coffee', function (float) {
          // Write code here that turns the phrase above into concrete actions
          let log = 4;  
          return log;
         });
       
//   ? Then I recieve an alert congratulating me for reaching my goal
//       Undefined. Implement with the following snippet:

         Then('I recieve an alert congratulating me for reaching my goal', function () {
          // Write code here that turns the phrase above into concrete actions
          let know = "congratulations, you met your goal"; 
          return know;
         });
         
         
         
    

       