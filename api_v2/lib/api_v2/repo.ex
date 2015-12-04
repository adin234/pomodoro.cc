defmodule ApiV2.Repo do
  use Ecto.Repo, otp_app: :api_v2
  import Ecto.Query
  alias ApiV2.Models.Pomodoro
  alias ApiV2.Models.PomodoroTask
  alias ApiV2.Models.UserPomodoro
  alias ApiV2.Models.UserPomodoroTask

  def tasks_for(user_id) do
    PomodoroTask.in_progress
    |> UserPomodoroTask.for_user(user_id)
    |> all
  end

  def task_for(user_id, task_id) do
    PomodoroTask.get(task_id)
    |> UserPomodoroTask.for_user(user_id)
    |> one
  end

  def create_pomodoro_task_for(user_id, task) do
    case insert task do
      {:ok, pomodoro_task} ->
        insert %UserPomodoroTask{user_id: user_id, pomodoro_task_id: pomodoro_task.id}
        {:ok, pomodoro_task}
      {:error, changeset}  ->
        {:error, changeset}
    end
  end

  def update_pomodoro_task_for(user_id, task) do
    update task
  end

  def create_pomodoro_for(user_id, pomodoro) do
    case insert pomodoro do
      {:ok, pomodoro} ->
        insert %UserPomodoro{user_id: user_id, pomodoro_id: pomodoro.id}
        {:ok, pomodoro}
      {:error, changeset}  ->
        {:error, changeset}
    end
  end

  def pomodoros_for(user_id) do
    Pomodoro.all
    |> UserPomodoro.for_user(user_id)
    |> all
  end

  def pomodoro_for(user_id, pomodoro_id) do
    Pomodoro.get(pomodoro_id)
    |> UserPomodoro.for_user(user_id)
    |> one
  end

  def update_pomodoros_for(user_id, pomodoro) do
    update pomodoro
  end
end
