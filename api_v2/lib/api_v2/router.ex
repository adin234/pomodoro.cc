defmodule ApiV2.Router do
  use Plug.Router

  # todo: alias ApiV2..
  alias ApiV2.Repo
  alias ApiV2.Models.PomodoroTask

  plug Plug.Logger
  if Mix.env == :dev, do: use Plug.Debugger

  plug ApiV2.Authorizer.Plug
  plug Plug.Parsers, parsers: [:json],
                     json_decoder: Poison
  plug :match
  plug :dispatch

  get "/api/tasks" do
    user = conn.assigns[:user]
    user_id = Dict.get(user, "id")
    pomodoro_tasks = Repo.tasks_for(user_id)
    send_resp(conn, 200, Poison.encode!(pomodoro_tasks))
  end

  post "/api/tasks" do
    user = conn.assigns[:user]
    user_id = Dict.get(user, "id")
    pomodoro_task_body = conn.params
    changeset = Ecto.Changeset.cast(%PomodoroTask{}, pomodoro_task_body, ~w(text), ~w())
    {:ok, pomodoro_task} = Repo.create_pomodoro_task_for(user_id, changeset)
    send_resp(conn, 201, Poison.encode!(pomodoro_task))
  end
end
