Feature: Recieve alerts
  Scenario: A user reaches their goal
    Given I set a goal of 4 cups of coffee
    When I log 4 cups of coffee
    Then I recieve an alert congratulating me for reaching my goal
  
 