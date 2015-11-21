---
title:       Easily skip ExUnit tests in Elixir
date:        2015-11-21
description: Skip tests written in ExUnit with a simple annotation and configuration of mix
---

I found that in Elixir it was a huge pain to temporarily skip tests.

But this was only due to my lazyness, it's actually very [simple and documented](http://elixir-lang.org/docs/v1.0/ex_unit/ExUnit.html#configure/1)

---

What you need to do is to configure ExUnit to *exclude* specific tests, annotated by some tag you choose.

Edit the file called `test/test_helper`, created by mix, to look like this:

<pre>
  ExUnit.start(exclude: [:skip])
</pre>

This will allow us to use the `@tag :skip` annotation before a specific test you don't want to be run.

For example:

```
defmodule Api.Router.Test do
  use ExUnit.Case, async: true
  use Plug.Test

  @tag :skip
  test "authenticates requests" do
    conn = conn(:get, "/api/pomodoro/fgsd73n")
             |> put_req_header("cookie", "not a valid cookie")
             |> Api.Router.call([])

    assert conn.status == 401
  end

end
```

For any question don't hesitate to tweet me [@pomodoro_cc](https://twitter.com/pomodoro_cc)
