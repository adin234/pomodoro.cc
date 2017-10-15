require('dotenv').load()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const express = require('express')
const app = express()

const { PORT = 3000 } = process.env

app.get('/', (req, res) => {
  res.send('Hello World from Express!')
})

console.log('listening on %s', PORT)
app.listen(PORT)

// exports.handler = function (event, context) {
//   stripe.charges.create({
//     // amount: event.amount,
//     source: event.source,
//     currency: event.currency || 'eur',
//     description: event.description || 'Stripe payment ' + event.order_id,
//     receipt_email: event.receipt_email || null
//   }, function (err, charge) {
//     if (err && err.type === 'card_error') {
//       context.fail(new Error(err.message))
//     } else if (err) {
//       context.fail(err)
//     } else {
//       context.succeed({ status: charge.status, success: true })
//     }
//   })
// }
