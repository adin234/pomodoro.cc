defmodule PlugUtils do
  import Plug.Conn

  def extract(conn) do
    method = conn.method
             |> String.downcase
             |> String.to_atom
    url = conn.request_path
    if conn.query_string != "" do
      url = url <> "?" <> conn.query_string
    end
    {:ok, body, conn} = read_body(conn)
    headers = conn.req_headers
    {method, url, body, headers}
  end
end
