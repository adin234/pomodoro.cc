var router = require('express').Router()
  , passport = require('passport')
var defaultRedirectRoutes = {failureRedirect: '/',successRedirect: '/'}
var User = require('../models/User')

router.get('/twitter', passport.authenticate('twitter'))
router.get('/github', passport.authenticate('github'))

router.get('/twitter/callback',
  passport.authenticate('twitter', defaultRedirectRoutes))
router.get('/github/callback',
  passport.authenticate('github', defaultRedirectRoutes))

/**
@api {get} /auth/info user information
@apiGroup Auth
@apiDescription Get informations about the user

@apiHeader {String} Authorization Users unique api-key.
@apiHeader {String} Cookie Users browser cookie.

@apiSuccess {String} apikey users unique apikey
@apiSuccess {Int} id users id
@apiSuccess {String} avatar users avatar
@apiSuccess {String} username users username
@apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
      "apikey": "f4k34p1k3y",
      "id": 123456,
      "avatar": "https://avatars.githubusercontent.com/u/2662706?v=3",
      "username": "rambo"
    }
*/
router.get('/info', function(req,res){
  if( req.user ){
    res.json(req.user)
    return res.end()
  }
  var authorizationHeader = req.get('Authorization')
  if( !authorizationHeader ){
    return unauthorized(res)
  }
  var apikey = authorizationHeader.match(/token (.*)/)
  apikey = apikey ? apikey[1] : apikey
  if( apikey ){
    User.findOne({apikey: apikey}, function(err, user) {
      if( err ) {
        return unauthorized(res)
      }
      res.json(user)
      return res.end()
    })
  } else {
    return unauthorized(res)
  }
})

function unauthorized(res) {
  res.writeHead(401)
  return res.end()
}

router.get('/logout', function(req,res){
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

module.exports = router
