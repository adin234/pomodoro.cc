use Mix.Config

config :api_v2, ApiV2.Repo,
  adapter: Ecto.Adapters.Postgres,
  database: "pomodoro_cc",
  username: "postgres",
  password: "postgres",
  hostname: "pomodoro-api_v2-db"

config :api_v2,
  http_port: 6000,
  authorizer_url: "http://pomodoro-auth:6000/auth/info",
  authorizer:     ApiV2.Authorizer

config :logger, level: :info

import_config "#{Mix.env}.exs"
