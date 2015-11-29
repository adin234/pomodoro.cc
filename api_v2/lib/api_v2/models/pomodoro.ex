defmodule ApiV2.Models.Pomodoro do
  use Ecto.Model
  @derive {Poison.Encoder, only: [:id, :type, :minutes, :started_at, :cancelled_at, :inserted_at, :updated_at]}
  @required_fields ~w(type minutes started_at)
  @optional_fields ~w(cancelled_at)

  schema "pomodoro" do
    field :type,         :string
    field :minutes,      :integer
    field :started_at,   Ecto.DateTime
    field :cancelled_at, Ecto.DateTime
    timestamps
  end

  def changeset(model, params \\ :empty) do
    cast(model, params, @required_fields, @optional_fields)
  end
end
