import React, { Component } from 'react'
import { Router, Route } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Provider } from 'react-redux'
import reduxStore from './reduxStore'
import Index from './routes/Index'
import Foo from './routes/Foo'

export default class Root extends Component {
  render() {
    return  <Provider store={reduxStore}>
              <Router history={createBrowserHistory()}>
                <Route path='/' component={Index} />
                <Route path='/foo' component={Foo} />
              </Router>
            </Provider>
  }
}
