defmodule ApiV2.Router do
  use Plug.Router

  alias ApiV2.Authorizer

  plug Plug.Logger
  if Mix.env == :dev, do: use Plug.Debugger

  plug Authorizer
  plug :match
  plug :dispatch

  get "/api/tasks" do
    IO.puts "--> authorized.."

    # put_resp_header(conn, "content-type", "application/json")
    send_resp(conn, 200, Poison.encode!([]))
  end
end
