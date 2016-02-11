Feature: Pomodoro Timer
Scenario: As a user I can start a pomodoro timer
  Given I open pomodoro.dev
  When I start a 25 minutes timer
  Then I should see the timer at 25:00 counting down
  When I stop a 25 minutes timer
  Then I should see the timer at 00:00
