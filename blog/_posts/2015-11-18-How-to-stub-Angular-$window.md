---
title: 'How to stub Angular $window'
date: 2015-11-18
layout: post
---

[As stated in the docs](https://docs.angularjs.org/guide/$location), `$window.location.href` should be used to redirect the user to a new page, and this can be easily tested. Here is how I found it to make most sense for me.

Using ES6, I create a file `fixtures/stubs/ngWindow.js` with the following content:

```
import angular from 'angular'

export const ngWindow = {
  location: {
    href: ''
  }
}
```

This provides us the basic structure of the `$window` object, you can of course adapt it to your needs.

Then, for example in a unit test, I include and use it in the following way:

```
import {ngWindow} from '../../fixtures/stubs/ngWindow'

...

describe('PurchaseProduct', () => {
  let $window

  beforeEach(angular.mock.module(($provide) => {
    $provide.value('$window', ngWindow)
  }))

  beforeEach(inject(($injector) => {
    ...

    $window = $injector.get('$window')
  }))

  it('redirects to payment page', (done) => {
    ...
    PurchaseProduct.execute()
    .then((redirectUrl) => {
      expect( $window.location.href ).to.eql( redirectUrl )
      done()
    })
    ...
  })


  
})
```
