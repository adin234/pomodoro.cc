defmodule ApiV2.Models.PomodoroTask do
  use Ecto.Model

  @derive {Poison.Encoder, only: [:id, :text, :completed, :deleted, :inserted_at, :updated_at]}
  schema "pomodoro_task" do
    field :text,         :string
    field :completed,    :boolean, default: false
    field :deleted,      :boolean, default: false
    timestamps
  end
end
