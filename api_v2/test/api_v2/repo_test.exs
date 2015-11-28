defmodule ApiV2.Repo.Test do
  use ExUnit.Case, async: false

  alias ApiV2.Repo
  alias ApiV2.Models.PomodoroTask
  alias ApiV2.Models.UserPomodoroTask

  @user_id 1
  @pomodoro_task %PomodoroTask{text: "test pomodoro_task"}

  setup do
    Repo.delete_all(UserPomodoroTask)
    Repo.delete_all(PomodoroTask)
    :ok
  end

  test "#tasks_for" do
    assert Repo.tasks_for(@user_id) == []
  end

  test "#create_pomodoro_task_for" do
    {:ok, pomodoro_task} = Repo.create_pomodoro_task_for(@user_id, @pomodoro_task)
    assert Repo.tasks_for(@user_id) == [pomodoro_task]
  end
end
