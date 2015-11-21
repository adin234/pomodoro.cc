use Mix.Config

config :api_v2,
  http_port: 6000,
  authorizer_url: "http://pomodoro-api:6000/auth/info"

import_config "#{Mix.env}.exs"
