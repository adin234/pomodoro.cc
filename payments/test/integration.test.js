const {serial} = require('ava')
const request = require('r2')

serial('it works', async t => {
  const body = {stripeEmail: 'integration-test@pomodoro.cc', stripeToken: 'tok_visa'}
  const response = await request.post('http://localhost:3000/subscription', {json: body}).json
  t.true(response.hasOwnProperty('customer'))
})
