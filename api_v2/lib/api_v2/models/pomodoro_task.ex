defmodule ApiV2.Models.PomodoroTask do
  use Ecto.Model

  schema "pomodoro_task" do
    field :text,         :string
    field :completed,    :boolean, default: false
    field :deleted,      :boolean, default: false
    timestamps
  end
end
