import timer from './reducers/timer'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import createLogger from 'redux-logger'

export const store = (function() {
  const logger = createLogger()
  const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore)

  const reducer = combineReducers({
    timer,
  })

  return createStoreWithMiddleware(reducer)
})()
