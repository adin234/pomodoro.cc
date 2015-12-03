defmodule ApiV2.Models.UserPomodoro do
  use Ecto.Model
  import Ecto.Query
  alias ApiV2.Models.UserPomodoro

  schema "user_pomodoro" do
    field :user_id,          :integer
    field :pomodoro_id, :integer
  end

  def for_user(query, user_id) do
    from q in query,
      join: up in UserPomodoro, on: q.id == up.pomodoro_id,
      where: up.user_id == ^user_id,
      select: q
  end
end
