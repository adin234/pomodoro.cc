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
    |> validate_inclusion(:minutes, [5,15,25])
    |> validate_type
    |> validate_minutes
  end

  defp validate_type(changeset) do
    validate_change(changeset, :type, fn (_, type) ->
      case changeset.model.type do
        "break" -> []
        "pomodoro" -> []
        _ -> [:type, "invalid type"]
      end
    end)
  end


  defp validate_minutes(changeset) do
    validate_change(changeset, :minutes, fn (_, minutes) ->
      case changeset.model.type do
        "break" ->
          if Enum.member?([5,15], minutes), do: [], else: [:minutes, "invalid minutes for type 'break'"]
        "pomodoro" ->
          if minutes == 25, do: [], else: [:minutes, "invalid minutes for type 'pomodoro'"]
        _ -> [:minutes, "invalid type"]
      end
    end)
  end
end
