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
    if (err) {
      console.error(err)
    } else {
      console.log(JSON.stringify(customer))
    }
    res.send(JSON.stringify({customer}))
  })
})

server.listen(PORT)
console.log('listening on %s', PORT)
