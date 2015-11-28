defmodule ApiV2.Models.PomodoroTask do
  use Ecto.Model

  schema "pomodoro_task" do
    field :text,         :string
    field :completed,    :boolean
    field :deleted,      :boolean
    timestamps
  end
end
