pomodoro.cc
============

# Boost your productivity
## Manage your time more effectively

[Pomodoro.cc](http://pomodoro.cc) is an online time tracking tool to plan and review the tasks for the day.

It takes advantage of the guidelines described in the [Pomodoro Technique](http://pomodorotechnique.com) to work more effectively with frequent, mind-refreshing breaks.

With the help of insightful statistics, you'll be able to better understand how much time you spent on each task and how focused you were.


----

# Todo

- [ ] LoginLogout does not do what it's supposed to -> see TopBar.js
- [ ] merge timer and pomodoro reducers and actions
- [ ] thunk for Sound effects to keep state consistent
- [ ] add store for userState to get rid of stupid checks on avatar to determine if user is logged in or not
- [ ] track domain events in db table
- [ ] Introduce the concept of "Pinning" a task to a pomodoro

---

# Contributing

Check the readme of the service you would like to contribute to :)

Also, see `TODO.md` for stuff that needs to be done, open a Github issue if you would like to work on a task :)

# Development environment setup (vagrant, docker)

To setup a development machine you'll need:

- **vagrant** 1.7.4
- **virtualbox** 5.0.6
- **nodejs** 4.2.1, **npm** 3

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

-----

To rebuild the infrastructure, run (from `/pomodoro.cc` inside vagrant)

- `opt/docker.restart`

or

- `opt/docker.build`
- `opt/docker.rm`
- `opt/docker.run`


#### [SSL certificate](https://devcenter.heroku.com/articles/ssl-certificate-self) and credentials

You can override the self-signed certificate with (put the files in the `ssl` directory) :

```
openssl genrsa -des3 -passout pass:x -out pomodoro.cc.pass.key 2048
openssl rsa -passin pass:x -in pomodoro.cc.pass.key -out pomodoro.cc.key
openssl req -new -key pomodoro.cc.key -out pomodoro.cc.csr
openssl x509 -req -days 365 -in pomodoro.cc.csr -signkey pomodoro.cc.key -out bundle.crt
```

#### Seed The DB

Inside vagrant, run

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
