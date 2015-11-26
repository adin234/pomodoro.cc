---
title: 'Build a DSL in JavaScript with functions'
date: 2015-11-26
layout: post
---

I found a reasonable and sane management of the routes with [Angular ui-router](https://github.com/angular-ui/ui-router).

It consists of [a routes definitions object](https://pomodoro.cc/blog/2015/Clean-up-your-routes-with-a-routes-definition-object-and-jade-locals/)
and a utility function that acts as a DSL for the router.

The function looks like this, some code has been omitted for brevity:

```
export default function route(name, config={}) {
  let {url} = config
  url = url || `/${name}`
  url = normalizeRouteUrl(url)
  const normalizedRouteName = normalizeRouteName(name)
  const nameCap = normalizedRouteName[0].toUpperCase() + normalizedRouteName.slice(1)
  const controller = `${nameCap}Ctrl as vm`
  const templateUrl = `controllers/${nameCap}Ctrl.html`
  return {
    name,
    url,
    controller,
    templateUrl,
    ...config,
  }
}
```

It essentially a Factory for a route, that can be interpreted by ui-router.
It can be used like this when defining the routes definition object:

```
import authorized from './resolvers/authorized'
import route from './route'

const abstract = true

export default {
  root:                             route('root', {url:'/'}),
  signup:                           route('signup', {abstract}),
    signupIndex:                    route('signup.index'),
    signupCallback:                 route('signup.callback', {url:'/callback'}),
  login:                            route('login'),
  dashboard:                        authorized(route('dashboard', {abstract})),
    dashboardIndex:                 route('dashboard.index', {url:'/?page'}),
    dashboardNew:                   route('dashboard.new', {params:{name:null, template:null}}),
}
```
---

To tie Angular ui-router and this concept of routes definition object, you can [follow this guide](https://pomodoro.cc/blog/2015/Clean-up-your-routes-with-a-routes-definition-object-and-jade-locals/).

---

The whole script is available [here](https://gist.github.com/christian-fei/db8955a0aee72e16eb4d).

---

For any questions, don't hesitate to contact [Pomodoro.cc on Twitter](https://twitter.com/pomodoro_cc)!
