defmodule ApiV2.Router.Test do
  use ExUnit.Case, async: true
  use Plug.Test

  @tag :noskip
  test "authenticates requests" do
    conn = conn(:get, "/api/settings")
             |> put_req_header("cookie", "invalid")
             |> ApiV2.Router.call([])

    assert conn.status == 401
  end

end
