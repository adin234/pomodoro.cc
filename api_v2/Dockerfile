# FROM asaaki/elixir-pure-alpine
# FROM msaraiva/elixir
FROM msaraiva/elixir-dev

ADD mix.exs /app/mix.exs
WORKDIR /app
RUN yes | mix local.hex
RUN yes | mix deps.get
ADD . /app
RUN mix compile

ENV MIX_ENV prod
EXPOSE 6000

CMD ["mix","run","--no-halt"]
