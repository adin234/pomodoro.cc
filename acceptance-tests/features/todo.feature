Feature: Todo
Scenario: As a user I can add a todo
  Given I open pomodoro.dev
  When I enter a new todo with "study science"
  Then I see a new todo with "study science"

Scenario: As a user I can complete a todo
  Given I open pomodoro.dev
  When I complete the first todo
  Then I see the first todo marked as completed
