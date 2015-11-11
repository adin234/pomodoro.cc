defmodule ApiV2.Worker do
  @http_port Application.get_env(:api_v2, :http_port)
  def start_link do
    Plug.Adapters.Cowboy.http(ApiV2.Router, [], port: @http_port)
  end
end
