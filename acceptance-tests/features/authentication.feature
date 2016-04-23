Feature: Authentication
Scenario: As a user I can log in
  Given I open pomodoro.dev
  When I go to the login page
  Then I should see the login page
  When I login
  Then I should be logged in
