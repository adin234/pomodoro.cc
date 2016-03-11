Feature: Pomodoro Timer
Scenario: As a user I can start a pomodoro timer
  Given I open pomodoro.dev

  When I click on the 25 minutes timer button
  Then I should see the timer at 25:00 counting down
  When I click on the 25 minutes timer button
  Then I should see the timer at 00:00

  When I click on the 15 minutes timer button
  Then I should see the timer at 15:00 counting down
  When I click on the 15 minutes timer button
  Then I should see the timer at 00:00

  When I click on the 5 minutes timer button
  Then I should see the timer at 5:00 counting down
  When I click on the 5 minutes timer button
  Then I should see the timer at 00:00

Feature: Custom Pomodoro Timer
Scenario: As a user I can start a custom length timer
  Given I open pomodoro.dev
  When I click on the timer
  Then I set the timer at 35:00
  Then I should see the timer at 35:00 counting down
  Then I should see the stop button
  When I click the stop timer button
  Then I should see the timer at 00:00
