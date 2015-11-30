defmodule ApiV2.Router.Test do
  use ExUnit.Case, async: true
  use Plug.Test

  test "authenticates requests" do
    conn = conn(:get, "/api/pomodoros")
             |> put_req_header("cookie", "invalid")
             |> ApiV2.Router.call([])

    assert conn.status == 401

    conn = conn(:get, "/api/pomodoros")
             |> put_req_header("cookie", "authorized")
             |> ApiV2.Router.call([])

    assert conn.status == 200
  end
end
