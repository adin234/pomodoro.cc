defmodule ApiV2.Router do
  use Plug.Router

  plug Plug.Logger
  if Mix.env == :dev, do: use Plug.Debugger

  plug ApiV2.Authorizer.Plug
  plug :match
  plug :dispatch

  get "/api/tasks" do
    {:authorized, user} = get_req_header(conn, "cookie")
                          |> ApiV2.Authorizer.authorize
    IO.puts "--> authorized.."
    IO.inspect user

    # put_resp_header(conn, "content-type", "application/json")
    send_resp(conn, 200, Poison.encode!([]))
  end
end
