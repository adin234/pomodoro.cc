defmodule FallbackProxy do
  use Plug.Router

  @api_url Application.get_env(:api_v2, :api_url)

  plug :match
  plug :dispatch

  match _ do
    {method, url, body, headers} = PlugUtils.extract_from(conn)
    url = @api_url <> url
    %HTTPoison.Response{status_code: status_code, body: body, headers: headers} = HTTPoison.request!(method, url, body, headers)
    Enum.each(headers, fn ({key,value}) ->
      conn = put_resp_header(conn, String.downcase(key), value)
    end)
    send_resp(conn, status_code, body)
  end
end
