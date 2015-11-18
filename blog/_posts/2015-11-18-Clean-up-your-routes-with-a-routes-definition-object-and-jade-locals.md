---
title: 'Clean up your routes with a routes definition object and jade locals'
date: 2015-11-18
layout: post
---

First of all let's get out of the way the pretentious sounding word "routes definition object". What I mean by it is simply a plain JavaScript object that contains all information needed by the router (specifically **ui-router**), thus can be importe and used in other JavaScript files.

Here a simple route definition object:

```
export default {
  root:    {name:'root',url:'/',templateUrl:'RootCtrl.html',controller:'RootCtrl as vm'},
  singup:  {name:'signup',url:'/signup',templateUrl:'SignupCtrl.html',controller:'SignupCtrl as vm'},
  login:   {name:'login',url:'/login',templateUrl:'LoginCtrl.html',controller:'LoginCtrl as vm'},
  ...
}
```

And in the config phase of your Angular application you would configure the router like so:

```
...
  $stateProvider
    .state(routes.root)
    .state(routes.login)
    .state(routes.signup)
...
```

You get the idea.

Probably you already see how this is powerful at cleaning up your routes, especially for new-comers that have to grasp the codebase, this can be a nice present for them. It shows without much clutter what your application represents and how the user can navigate it.

---

But it gets better. With jade locals.

You have probably already used the `ui-sref` directive, it would look like this:

```
  a.btn.btn-default(ui-sref="#{routes.login.name}") Login
  a.btn.btn-default(ui-sref="#{routes.signup.name}") Signup
```

And in your JavaScript modules you can use it like a plain object, injected as a Angular constant or required on the fly with a transpiler (this is a degenerate example..):

```
.service('RegisterUser', ($state, routes) {
  this.execute = () => {
    $state.go(routes.signup.name)
  }
})
```

Or just as a plain import:

```
import routes from "./routes"

...
console.log( '-- routes', routes )
```

---

As a closing point I want to show you an example integration with `gulp` ang `gulp-jade`:

The gulp task to handle jade templates could look like this

```
'use strict'
var config = require('../config')
var gulp = require('gulp')
  , jade = require('gulp-jade')
  , browserSync = require('browser-sync')

var routes = require('../src/router/routes')

gulp.task('jade', function(){
  gulp.src(config.FILES.jade)
    .pipe(jade({
      data: {
        routes: routes
      }
    }))
    .pipe(gulp.dest('build/'))
    .pipe(browserSync.reload({stream:true}))
})

```


Please [tweet me](https://twitter.com/christian_fei) what you think about this approach!
