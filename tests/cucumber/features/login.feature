Feature: playwright demo tests

 Feature Description: to run the test script

@firstScenario
Scenario: Login Functionality
    Given User navigates to the application
    When  I enter the username as "DemoSalesManager"
    When  I enter the password as "crmsfa"
    And   I click on login button
    Then  User should logged in successfully
    And   Logout from the application

@firstScenario
Scenario Outline: creating the lead account
    When  click on the Lead account
    When  enter the FirstName
    When  enter the LastName 