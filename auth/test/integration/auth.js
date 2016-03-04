var expect = require('chai').expect
  , app = require('../../')
  , request = require('supertest')

describe('auth', function(){
  it('logs in test user', function (done) {
    request(app)
      .get('/auth/fake')
      .expect('Location', '/')
      .expect(302,done)
  })

  it('authorizes request with token', function (done) {
    request(app)
      .get('/auth/info')
      .set('Authorization', 'token 123fake')
      .expect(200, done)
  })
})
