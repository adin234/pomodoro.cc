defmodule ApiV2.Models.Pomodoro.Test do
  use ExUnit.Case, async: true

  alias ApiV2.Models.Pomodoro
  @base_break %Pomodoro{type: "break", started_at: Ecto.DateTime.local}
  @base_pomodoro %Pomodoro{type: "pomodoro", started_at: Ecto.DateTime.local}

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
end
