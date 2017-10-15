require('dotenv').load()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const createServer = require('./create-server')

const { PORT = 3000 } = process.env

const server = createServer(PORT)
server.post('/subscription', async (req, res) => {
  console.log('POST /subscription')
  console.log('  req.body', req.body)
  const customer = await stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
  console.log('-- customer.create', customer)
  const plans = await stripe.plans.list({limit: 5})
  console.log('-- plans.list', plans)
  const subscription = await stripe.subscriptions.create({
    customer: customer.id,
    items: [{
      plan: 'pomodoro.cc monthly'
    }]
  })
  console.log('-- subscriptions.create', subscription)
  res.send(JSON.stringify({customer, subscription}))
})

server.listen(PORT)
console.log('listening on %s', PORT)
