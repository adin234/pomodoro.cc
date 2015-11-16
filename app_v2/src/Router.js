import React, { Component } from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Provider } from 'react-redux'
import reduxStore from './reduxStore'
import Layout from './Layout'
import Index from './routes/Index'
import Foo from './routes/Foo'

export default class Root extends Component {
  render() {
    const path = /pomodoro/.test(window.location.host) ? '/beta' : '/'
    return  <Provider store={reduxStore}>
              <Router history={createBrowserHistory()}>
                <Route path={path} component={Layout}>
                  <IndexRoute component={Index}/>
                  <Route path='foo' component={Foo} />
                </Route>
              </Router>
            </Provider>
  }
}
