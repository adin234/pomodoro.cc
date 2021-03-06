require('dotenv').load()
const passport = require('passport')
const UserInfo = require('./modules/UserInfo')
const TwitterStrategy = require('passport-twitter').Strategy
const GitHubStrategy = require('passport-github').Strategy
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const User = require('./models/User')

module.exports = function (app) {
  app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'foo',
    store: new MongoStore({
      collection: 'sessions',
      url: process.env.MONGO_URL
    })
  }))

  app.use(passport.initialize())
  app.use(passport.session())

  passport.serializeUser(function (user, done) {
    done(null, user)
  })

  passport.deserializeUser(function (user, done) {
    done(null, user)
  })

  passport.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: process.env.TWITTER_CALLBACK_URL
  }, authenticatedUser))
  passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK_URL
  }, authenticatedUser))

  function authenticatedUser (token, tokenSecret, profile, done) {
    var user = new UserInfo(profile).toJSON()
    User.findOne({
      id: user.id
    }, handleUser(done, profile))
  }

  function handleUser (done, profile) {
    return function (err, user) {
      if (err) {
        return done(err, null)
      }
      if (user) {
        return done(null, user)
      }
      User.create(new UserInfo(profile), function (err, user) {
        if (err) return done(err, null)
        done(null, user)
      })
    }
  }
}
