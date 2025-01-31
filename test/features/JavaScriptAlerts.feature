Feature: Java script alert funtionality

  Background:
    Given I am on the main page

  Scenario: Check different types of alert
    When I click on the Java script alert link
    Then I should be on java script alerts page
    When I click on JS Alert Button
    Then Alert with "I am a JS Alert" text is shown
    When I close the alert
    Then I should see "You successfully clicked an alert"
    When I click on JS Confirm Button
    Then I should see  "I am a JS Confirm" text is shown
    When I click on the cancel option
    Then I should see "You clicked: Cancel"
    When I click on Js Prompt Button
    Then Prompt with "I am a JS prompt" text is shown
    When I type "John"into the prompt
    And I click Ok
    Then I should see "You entered: John"
