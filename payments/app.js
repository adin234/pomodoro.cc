require('dotenv').load()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const createServer = require('./create-server')

const { PORT = 3000 } = process.env

const server = createServer(PORT)
server.post('/subscription', async (req, res) => {
  console.log('POST /subscription')
  console.log('  req.body', req.body)
  const customer = await createCustomer(req.body)
  console.log('-- customer.create', customer)
  const subscription = await createSubscription(customer.id)
  console.log('-- subscriptions.create', subscription)
  res.send(JSON.stringify({customer, subscription}))
})

server.listen(PORT)
console.log('listening on %s', PORT)

// async function listPlans () {
//   const plans = await stripe.plans.list({limit: 5})
//   console.log('-- plans.list', plans)
// }

async function createCustomer ({ stripeEmail: email, stripeToken: source }) {
  return stripe.customers.create({ email, source })
}

async function createSubscription (customerId, plan = 'pomodoro.cc monthly') {
  return stripe.subscriptions.create({
    customer: customerId,
    items: [{
      plan
    }]
  })
}
