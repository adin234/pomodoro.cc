defmodule ApiV2.Models.Pomodoro.Test do
  use ExUnit.Case, async: true

  alias ApiV2.Models.Pomodoro

  test "validates minutes" do
    base_pomodoro = %Pomodoro{type: "break", started_at: Ecto.DateTime.local}
    invalid_minutes = [-1, 30]
    Enum.each(invalid_minutes, fn(minutes) ->
      pomodoro = Pomodoro.changeset(base_pomodoro, %{minutes: minutes})
      refute pomodoro.valid?
    end)
    valid_minutes = [5, 15, 25]
    Enum.each(valid_minutes, fn(minutes) ->
      pomodoro = Pomodoro.changeset(base_pomodoro, %{minutes: minutes})
      assert pomodoro.valid?
    end)
  end
end
