defmodule ApiV2.Models.PomodoroTask do
  use Ecto.Model
  import Ecto.Query
  alias ApiV2.Models.PomodoroTask

  @derive {Poison.Encoder, only: [:id, :text, :completed, :deleted, :inserted_at, :updated_at]}
  @required_fields ~w(text)
  @optional_fields ~w(completed deleted)

  schema "pomodoro_task" do
    field :text,         :string
    field :completed,    :boolean, default: false
    field :deleted,      :boolean, default: false
    timestamps
  end

  # query api
  def all do
    from pt in PomodoroTask
  end
  def in_progress do
    from pt in all,
      where: pt.deleted == false
  end
  def get(pomodoro_id) do
    from p in all,
      where: p.id == ^pomodoro_id
  end


  def changeset(model, params \\ :empty) do
    cast(model, params, @required_fields, @optional_fields)
  end
end
