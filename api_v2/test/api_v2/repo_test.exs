defmodule ApiV2.Repo.Test do
  use ExUnit.Case, async: false

  alias ApiV2.Repo
  alias ApiV2.Models.PomodoroTask
  alias ApiV2.Models.UserPomodoroTask

  @user_id 1
  @pomodoro_task %PomodoroTask{text: "test pomodoro_task"}
  @updated_text "Rephrasing the task text"

  setup do
    Repo.delete_all(UserPomodoroTask)
    Repo.delete_all(PomodoroTask)
    :ok
  end

  test "#create_pomodoro_task_for" do
    {:ok, pomodoro_task} = create_pomodoro
  end

  test "#tasks_for" do
    assert Repo.tasks_for(@user_id) == []
    {:ok, pomodoro_task} = create_pomodoro
    assert Repo.tasks_for(@user_id) == [pomodoro_task]
  end

  test "#task_for" do
    assert Repo.task_for(@user_id, 0) == nil
    {:ok, pomodoro_task} = create_pomodoro
    assert Repo.task_for(@user_id, pomodoro_task.id) == pomodoro_task
  end

  test "#update_pomodoro_task_for" do
    {:ok, pomodoro_task} = create_pomodoro
    updated_pomodoro_task = PomodoroTask.changeset(pomodoro_task, %{text: @updated_text})
    Repo.update_pomodoro_task_for(@user_id, updated_pomodoro_task)
    updated_pomodoro_task_in_db = Repo.task_for(@user_id, pomodoro_task.id)
    assert updated_pomodoro_task_in_db.text == @updated_text
  end

  defp create_pomodoro do
    Repo.create_pomodoro_task_for(@user_id, @pomodoro_task)
  end
end
