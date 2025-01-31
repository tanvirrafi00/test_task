Feature: Key presses funtionality

    Background:
        Given I am on the main page

    Scenario: Check backspace key
        When I click on the Key Presses link
        Then  I should be on the Key Presses Page
        When I click on input the field
        And I type backspace in the input field
        Then i should see "You entered: BACK_SPACE"



