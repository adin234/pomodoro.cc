use Mix.Config

config :api_v2, http_port: 6000, api_url: "http://pomodoro-api:6000"
config :api_v2, ApiV2.Repo,
  adapter: Ecto.Adapters.Postgres,
  hostname: "postgres",
  database: "api_v2",
  username: "postgres",
  password: "postgres"

import_config "#{Mix.env}.exs"
