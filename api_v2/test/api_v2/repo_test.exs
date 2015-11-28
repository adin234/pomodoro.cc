defmodule ApiV2.Repo.Test do
  use ExUnit.Case, async: false

  alias ApiV2.Repo
  alias ApiV2.Models.PomodoroTask

  @user_id 1
  @pomodoro_task %PomodoroTask{text: "test pomodoro_task"}

  test "#tasks_for" do
    assert Repo.tasks_for(@user_id) == []
  end

  test "creates a pomodoro_task" do
    # Repo.create_pomodoro_task_for(@user_id, @pomodoro_task)
  end
end
