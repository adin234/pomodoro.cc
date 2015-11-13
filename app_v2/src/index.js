'use strict'
import React from 'react'
import {render} from 'react-dom'
import App from './App.js'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import dummy from './reducers/dummy'

const reducers = combineReducers({
  dummy
})

const store = createStore(reducers)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('main')
)
