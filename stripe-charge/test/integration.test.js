const {serial} = require('ava')

serial('it works', async t => {
  const response = await Promise.resolve(42)
  t.is(response, 42)
})
