defmodule Api.Mixfile do
  use Mix.Project

  def project do
    [app: :api,
     version: "0.0.1",
     elixir: "~> 1.0",
     build_embedded: Mix.env == :prod,
     start_permanent: Mix.env == :prod,
     deps: deps]
  end

  def application do
    [
      applications: [:logger, :tzdata, :cowboy, :plug, :httpoison, :postgrex, :ecto],
      mod: {Api, []},
    ]
  end

  defp deps do
    [
      {:postgrex, "~> 0.11.2"},
      {:ecto, "~> 2.0"},
      {:cowboy, "~> 1.0.4"},
      {:plug, "~> 1.1.6"},
      {:httpoison, "~> 0.9.0"},
      {:poison, "~> 2.2.0"},
      {:timex, "~> 2.2.1"},
      {:timex_ecto, "~> 1.1.3"},
    ]
  end
end

