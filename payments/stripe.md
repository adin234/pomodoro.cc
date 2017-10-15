# Links

PUBLISHABLE KEY (https://dashboard.stripe.com/account/apikeys)
  pk_live_ZFyVJxZfTy8W8BlilTbRAnqc

retrieve a subscription
  https://stripe.com/docs/api/node#retrieve_subscription

simple recurring serverless payments
  http://normal-extensions.com/2017/05/05/simple-recurring/



# Create customer

*Reference* https://stripe.com/docs/api/node#create_customer

*Articles*
  http://normal-extensions.com/2017/05/05/simple-recurring/

*Example*

```
stripe.customers.create({
  email: request.form.get('stripeEmail'),
  source: request.form.get('stripeToken')

}, function(err, customer) {
  // asynchronously called
})
```


# Create subscription

*Reference* https://stripe.com/docs/api/node#create_subscription

*Example*

```
stripe.subscriptions.create({
  customer: "cus_BaPvZuk3GAnCzw",
  items: [
    {
      plan: "gold",
    },
  ]
}, function(err, subscription) {
    // asynchronously called
  }
);
```
