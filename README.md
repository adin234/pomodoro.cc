pomodoro.cc
============

# Boost your productivity
## Manage your time more effectively

[Pomodoro.cc](http://pomodoro.cc) is an online time tracking tool to plan and review the tasks for the day.

It takes advantage of the guidelines described in the [Pomodoro Technique](http://pomodorotechnique.com) to work more effectively with frequent, mind-refreshing breaks.

With the help of insightful statistics, you'll be able to better understand how much time you spent on each task and how focused you were.


----

# Contributing

## app

From the `app` folder:

`npm install`.

- to recompile the assets during development, run `npm start`

- run the tests with `npm test`

- run the end-to-end tests with `npm run e2e`

### api

`npm install`.

You can run the tests with: (inside vagrant)

```
/pomodoro.cc/api/opt/test
```

In `DEV` mode (when `docker.restart|run` is started with a `DEV` parameter), an authentication backdoor
is activated for e2e testing. You can login in by visiting [https://pomodoro.dev/auth/fake](https://pomodoro.dev/auth/fake).


-----

# Development environment setup (vagrant, docker)

To setup a development machine you'll need:

- **vagrant** 1.7.4
- **virtualbox** 5.0.6
- **nodejs** 4.2.1

*Note*: setup works with these versions, previous version might also work.

Run the following to bootstrap the environment (install the needed dependencies, setup docker, build the images)

```
opt/bootstrap
```

Fill in your information in the `credentials.json` if you want to be able to login in `http://pomodoro.dev`.
You'll need to create an app for Github and Twitter. (If you don't want to provide them, that's fine. Whilst the authentication won't work, you will still need to create this file.)

Add an entry in your `/etc/hosts`:

```
192.168.11.2    pomodoro.dev
```

Boot up the vagrant with:

```
vagrant up
```


Seed the database (from inside vagrant) with:

```
opt/docker.seed
```

-----

The vagrant box keep the following docker containers up and running:

- `pomodoro-main`: nginx container that routes traffic to one of the following containers
  - `pomodoro-app`: nginx container that serves the static assets
  - `pomodoro-api`: node container that represents the api
  - `pomodoro-api_v2`: elixir container that represents the (new) api, that's going to replace the new one_
  - `pomodoro-blog`: node container that contains the blog
- `redis`: for the sessions shared between the two instances of `pomodoro-api`
- `mongo`: db for the `pomodoro-api` to save pomodori of registered users

To rebuild the infrastructure, run (from `/pomodoro.cc` inside vagrant)

- `opt/docker.restart`

or

- `opt/docker.build`
- `opt/docker.rm`
- `opt/docker.run`

##### [SSL certificate](https://devcenter.heroku.com/articles/ssl-certificate-self) and credentials

You can override the self-signed certificate with (put the files in the `ssl` directory) :

```
openssl genrsa -des3 -passout pass:x -out pomodoro.cc.pass.key 2048
openssl rsa -passin pass:x -in pomodoro.cc.pass.key -out pomodoro.cc.key
openssl req -new -key pomodoro.cc.key -out pomodoro.cc.csr
openssl x509 -req -days 365 -in pomodoro.cc.csr -signkey pomodoro.cc.key -out bundle.crt
```

##### Seed The DB

Inside vagrant

```
opt/docker.seed
```



## docker maintainance scripts and utilities

#### dump mongo

```
opt/mongo.dump /path/to/dump
```

#### restore mongo from dump

```
opt/mongo.restore /path/to/restore
```

### enter mongo

```
opt/mongo.enter
```


