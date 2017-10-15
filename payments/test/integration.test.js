const {serial} = require('ava')
const request = require('r2')

serial('it works', async t => {
  const testToken = 'tok_visa'
  const body = {stripeEmail: 'integration-test@pomodoro.cc', stripeToken: testToken}
  const response = await request.post('http://localhost:3000/subscription', {json: body}).json
  t.true(response.hasOwnProperty('customer'))
  t.true(response.hasOwnProperty('subscription'))
})
