defmodule ApiV2.Models.Pomodoro.Test do
  use ExUnit.Case, async: true

  alias ApiV2.Models.Pomodoro
  @base_break %Pomodoro{type: "break", minutes: 5, started_at: Ecto.DateTime.local}
  @base_pomodoro %Pomodoro{type: "pomodoro", minutes: 25, started_at: Ecto.DateTime.local}

  test "validates type" do
    pomodoro = Pomodoro.changeset(%Pomodoro{}, %{type: "invalid_type", minutes: 5, started_at: Ecto.DateTime.local})
    refute pomodoro.valid?
  end

  test "validates minutes based for break" do
    Enum.each([5,15], fn(minutes) ->
      pomodoro = Pomodoro.changeset(@base_break, %{minutes: minutes})
      assert pomodoro.valid?
    end)
    Enum.each([25], fn(minutes) ->
      pomodoro = Pomodoro.changeset(@base_break, %{minutes: minutes})
      refute pomodoro.valid?
    end)
  end

  test "validates minutes based for pomodoro" do
    Enum.each([25], fn(minutes) ->
      pomodoro = Pomodoro.changeset(@base_pomodoro, %{minutes: minutes})
      assert pomodoro.valid?
    end)
    Enum.each([5, 15], fn(minutes) ->
      pomodoro = Pomodoro.changeset(@base_pomodoro, %{minutes: minutes})
      refute pomodoro.valid?
    end)
  end

  test "validates cancelled_at is after started_at timestamp" do
    {:ok, time} = Ecto.Time.cast("23:59:59Z")
    afterwards = Ecto.DateTime.from_date_and_time(Ecto.Date.local, time)
    valid_pomodoro = Pomodoro.changeset(@base_pomodoro, %{cancelled_at: afterwards})
    assert valid_pomodoro.valid?

    {:ok, time} = Ecto.Time.cast("00:00:00Z")
    before = Ecto.DateTime.from_date_and_time(Ecto.Date.local, time)
    invalid_pomodoro = Pomodoro.changeset(@base_pomodoro, %{cancelled_at: before})
    refute invalid_pomodoro.valid?
  end
end
