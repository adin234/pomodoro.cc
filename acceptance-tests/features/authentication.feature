Feature: Authentication
Scenario: As a user I can log in
  Given I open pomodoro.dev
  Then I login
  Then I should be logged in
