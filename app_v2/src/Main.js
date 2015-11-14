import React, { Component } from 'react'
import { Router, Route } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Provider } from 'react-redux'
import { store } from './store'
import Index from './routes/Index'

export default class Root extends Component {
  render() {
    return  <Provider store={store}>
              <Router history={createBrowserHistory()}>
                <Route path='/' component={Index} />
              </Router>
            </Provider>
  }
}
