defmodule Api.Repo.Migrations.ChangeMinutesFieldsOfPomodoroToTakeSeconds do
  use Ecto.Migration

  def up do
    alter table :pomodoro do
      add :seconds, :integer
    end
    execute "UPDATE pomodoro SET seconds = 1500 WHERE minutes = 25;"
    execute "UPDATE pomodoro SET seconds = 900 WHERE minutes = 15;"
    execute "UPDATE pomodoro SET seconds = 300 WHERE minutes = 5;"
  end

  def down do
    alter table :pomodoro do
      remove :seconds
    end
  end
end
