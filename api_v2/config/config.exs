use Mix.Config

config :api_v2, http_port: 6000, api_url: "http://pomodoro-api:6000"

import_config "#{Mix.env}.exs"
