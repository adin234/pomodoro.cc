defmodule FakeAuthorizer do
  def authorize(cookie) do
    case "#{cookie}" do
      "authorized" -> true
      _            -> false
    end
  end
end

defmodule ApiV2.Authorizer.Plug.Test do
  use ExUnit.Case, async: false
  use Plug.Test

  alias ApiV2.Authorizer.Plug, as: AuthorizerPlug

  test "responds with 401 when unauthorized" do
    conn = conn(:get, "/")
             |> put_req_header("cookie", "unauthorized")
             |> AuthorizerPlug.call([authorizer: FakeAuthorizer])

    assert conn.status == 401
    assert conn.state == :sent
  end

  test "authorizes request and passes to next plug" do
    conn = conn(:get, "/")
             |> put_req_header("cookie", "authorized")
             |> AuthorizerPlug.call([authorizer: FakeAuthorizer])

    assert conn.state == :unset
    assert conn.status == nil
  end
end
