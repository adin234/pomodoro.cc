FROM msaraiva/elixir-dev

ADD mix.exs /app/mix.exs
WORKDIR /app
ENV MIX_ENV prod
RUN mix deps.get
ADD . /app
RUN mix compile
RUN mix compile.protocols

EXPOSE 6000

CMD ["mix","run","--no-halt"]
