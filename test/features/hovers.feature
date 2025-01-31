Feature: Hover funtionality

    Background:
        Given  I am on the main page

    Scenario: Check hover
        When I click on Hovers
        Then I should be on hover page
        When I hover on user 2 profile image
        Then I should see name and view profile

