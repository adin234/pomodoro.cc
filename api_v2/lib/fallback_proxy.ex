defmodule FallbackProxy do
  use Plug.Router

  @api_url Application.get_env(:api_v2, :api_url)

  plug :match
  plug :dispatch

  match _ do
    {method, url, body, headers} = extract(conn)
    %HTTPoison.Response{status_code: status_code, body: body, headers: headers} = HTTPoison.request!(method, url, body, headers)
    Enum.each(headers, fn ({key,value}) ->
      conn = put_resp_header(conn, String.downcase(key), value)
    end)
    send_resp(conn, status_code, body)
  end

  defp extract(conn) do
    method = conn.method
             |> String.downcase
             |> String.to_atom
    url = @api_url <> conn.request_path
    if conn.query_string do
      url = url <> "?" <> conn.query_string
    end
    {:ok, body, conn} = read_body(conn)
    headers = conn.req_headers
    {method, url, body, headers}
  end
end