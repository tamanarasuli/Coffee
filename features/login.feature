Feature: Allow user to get to the coffee tracker
  Scenario: User wants to see consumption
    Given user wants to input name, goal, intake
    When the user clicks add cup 
    Then "/insertData/name/gigi/goal/6/intake/5" is returned