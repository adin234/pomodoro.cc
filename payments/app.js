require('dotenv').load()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser())

const { PORT = 3000 } = process.env

app.post('/subscription', (req, res) => {
  console.log('POST /subscription')
  console.log('  body', req)
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

console.log('listening on %s', PORT)
app.listen(PORT)
