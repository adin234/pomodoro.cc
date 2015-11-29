defmodule ApiV2.Models.UserPomodoro do
  use Ecto.Model

  schema "user_pomodoro" do
    field :user_id,          :integer
    field :pomodoro_id, :integer
  end
end
