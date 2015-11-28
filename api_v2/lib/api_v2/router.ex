defmodule ApiV2.Router do
  use Plug.Router

  plug Plug.Logger
  if Mix.env == :dev, do: use Plug.Debugger

  plug ApiV2.Authorizer.Plug
  plug :match
  plug :dispatch

  get "/api/tasks" do
    user = conn.assigns[:user]
    user_id = Dict.get(user, "id")
    pomodoro_tasks = ApiV2.Repo.uncompleted_todo_for(user_id)
    IO.inspect pomodoro_tasks
    send_resp(conn, 200, Poison.encode!(pomodoro_tasks))
  end
end
