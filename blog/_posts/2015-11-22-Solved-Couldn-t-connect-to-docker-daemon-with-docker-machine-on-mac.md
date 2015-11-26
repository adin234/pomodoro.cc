---
title:       "Solved: Couldn't connect to docker daemon with docker machine on mac"
date:        2015-11-22
description: Setting the correct environment variables to get docker-compose working on a mac
---

So, docker-machine is a nice tool, but it was a pain to connect to docker daemon since the necessary environment variables are not set by default.

But it was an easy fix. If you don't have a custom configuration for docker machine, the default machine name is `default`.

Run `docker-machine start` to boot the machine first.

And finally `eval (docker-machine env default)` to set the variables needed by the docker client on your host machine.

---

Don`t hesitate to [tweet me](https://twitter.com/pomodoro_cc) for any questions!
