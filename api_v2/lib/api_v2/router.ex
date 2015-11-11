defmodule ApiV2.Router do
  use Plug.Router

  alias ApiV2.FallbackProxy

  @api_url Application.get_env(:api_v2, :api_url)

  plug Plug.Logger
  if Mix.env == :dev, do: use Plug.Debugger

  plug :match
  plug :dispatch

  get "/api/tasks" do
    send_resp(conn, 200, Poison.encode!([]))
  end
end
