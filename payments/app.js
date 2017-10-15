require('dotenv').load()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const createServer = require('./create-server')

const { PORT = 3000 } = process.env

const server = createServer(PORT)
server.post('/subscription', (req, res) => {
  console.log('POST /subscription')
  console.log('  body', req.body)
  stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  }, (err, customer) => {
    console.log('customer.create', err, JSON.stringify(customer))
    if (err) {
      res.send(500, err)
      console.error(err)
    } else {
      stripe.plans.list({limit: 5}, (err, plans) => {
        console.log('-- plans', err, plans)
      })
      stripe.subscriptions.create({
        customer: customer.id,
        items: [{
          plan: 'pomodoro.cc monthly'
        }]
      }, (err, subscription) => {
        console.log('-- subscriptions.create', err, subscription)
        if (err) {
          console.error(err)
          res.send(500, err)
        } else {
          res.send(JSON.stringify({customer, subscription}))
        }
      })
    }
  })
})

server.listen(PORT)
console.log('listening on %s', PORT)
