defmodule ApiV2.Authorizer.Plug do
  require Logger
  import Plug.Conn
  @behaviour Plug
  def init(opts) do
    opts
  end

  def call(conn, opts) do
    authorizer = Keyword.get(opts, :authorizer, ApiV2.Authorizer)
    cookie = get_req_header(conn, "cookie")
    IO.puts "cookie #{cookie}"
    authorized = authorizer.authorize(cookie)
    IO.puts "authorized #{authorized}"
    case authorized do
      true ->
        conn
      false ->
        conn
          |> send_resp( 401, "Unauthorized")
          |> halt
    end
  end
end
