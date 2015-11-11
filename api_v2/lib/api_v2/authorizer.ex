defmodule ApiV2.Authorizer do
  require Logger
  import Plug.Conn
  alias Plug.Conn
  @behaviour Plug
  @authorizer_url Application.get_env(:api_v2, :authorizer_url) <> "/auth/info"

  def init(_opts) do
  end

  def call(conn, _opts) do
    IO.puts "--> Authorizer"
    case HTTPoison.get!(@authorizer_url, conn.req_headers) do
      %HTTPoison.Response{status_code: 200, body: _, headers: _} ->
        conn
      %HTTPoison.Response{status_code: 401, body: _, headers: _} -> false
        conn
          |> send_resp( 401, "Unauthorized")
          |> halt
    end
  end
end
