const {serial} = require('ava')
const request = require('r2')
const {deleteSubscription} = require('./_stripe-utils')

const testToken = 'tok_visa'

serial('creates subscription for "pomodoro.cc monthly"', async t => {
  const body = {stripeEmail: 'integration-test@pomodoro.cc', stripeToken: {id: testToken}}
  const response = await request.post('http://localhost:3000/', {json: body}).json
  t.true(response.hasOwnProperty('customer'))
  t.true(response.hasOwnProperty('subscription'))
  t.is(response.subscription.plan.id, 'pomodoro.cc monthly')

  await deleteSubscription(response.subscription.id)
})
