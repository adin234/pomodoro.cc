'use strict'
import React from 'react'
import {render} from 'react-dom'
import App from './App.js'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import dummy from './reducers/dummy'
import createLogger from 'redux-logger'

const logger = createLogger()
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore)

const reducer = combineReducers({
  dummy
})

const store = createStoreWithMiddleware(reducer)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('main')
)
