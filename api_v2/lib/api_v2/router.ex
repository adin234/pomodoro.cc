defmodule ApiV2.Router do
  use Plug.Router

  alias ApiV2.Authorizer.Plug, as: Authorizer
  alias ApiV2.Repo
  alias ApiV2.Models.Pomodoro
  alias ApiV2.Models.PomodoroTask

  plug Plug.Logger
  if Mix.env == :dev, do: use Plug.Debugger

  plug Authorizer
  plug Plug.Parsers, parsers: [:json],
                     json_decoder: Poison
  plug :match
  plug :dispatch

  get "/api/pomodoros" do
    user = conn.assigns[:user]
    user_id = Dict.get(user, "id")
    pomodoros = Repo.pomodoros_for(user_id)
    send_resp(conn, 200, Poison.encode!(pomodoros))
  end

  post "/api/pomodoros" do
    user = conn.assigns[:user]
    user_id = Dict.get(user, "id")
    pomodoro_body = conn.params
    IO.inspect conn.params
    changeset = Pomodoro.changeset(%Pomodoro{}, pomodoro_body)
    {:ok, pomodoro} = Repo.create_pomodoro_for(user_id, changeset)
    send_resp(conn, 201, Poison.encode!(pomodoro))
  end



  get "/api/tasks" do
    user = conn.assigns[:user]
    user_id = Dict.get(user, "id")
    tasks = Repo.tasks_for(user_id)
    send_resp(conn, 200, Poison.encode!(tasks))
  end

  get "/api/tasks/:task_id" do
    user = conn.assigns[:user]
    user_id = Dict.get(user, "id")
    task = Repo.task_for(user_id, task_id)
    send_resp(conn, 200, Poison.encode!(task))
  end

  post "/api/tasks" do
    user = conn.assigns[:user]
    user_id = Dict.get(user, "id")
    pomodoro_task_body = conn.params
    changeset = PomodoroTask.changeset(%PomodoroTask{}, pomodoro_task_body)
    {:ok, pomodoro_task} = Repo.create_pomodoro_task_for(user_id, changeset)
    send_resp(conn, 201, Poison.encode!(pomodoro_task))
  end

  put "/api/tasks/:task_id" do
    user = conn.assigns[:user]
    user_id = Dict.get(user, "id")
    old_task = Repo.task_for(user_id, task_id)
    updated_task = PomodoroTask.changeset(old_task, conn.params)
    {:ok, pomodoro_task} = Repo.update_pomodoro_task_for(user_id, updated_task)
    send_resp(conn, 201, Poison.encode!(pomodoro_task))
  end
end
