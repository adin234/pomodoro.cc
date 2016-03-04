Feature: Docs
Scenario: As a user I can read the docs
  Given I open pomodoro.dev
  When I click on Docs
  Then I should see the documentation page
