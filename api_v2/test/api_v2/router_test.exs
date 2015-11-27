defmodule ApiV2.Router.Test do
  use ExUnit.Case, async: true
  use Plug.Test

  test "authenticates requests" do
    conn = conn(:get, "/api/settings")
             |> put_req_header("cookie", "invalid")
             |> ApiV2.Router.call([])

    assert conn.status == 401
  end

  @tag :skip
  test "gets tasks for user" do
    conn = conn(:get, "/api/tasks")
             |> put_req_header("cookie", "invalid")
             |> ApiV2.Router.call([])

    assert conn.status == 200
  end

end
