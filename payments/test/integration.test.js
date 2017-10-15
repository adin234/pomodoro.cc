const {serial} = require('ava')
const request = require('r2')

serial('it works', async t => {
  const body = {stripeEmail: 'integration-test@pomodoro.cc', stripeToken: 'integration-test'}
  const response = await request.post('http://localhost:3000/subscription', {body}).json
  t.true(response.hasOwnProperty('customer'))
})
