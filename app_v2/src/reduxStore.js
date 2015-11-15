import timer from './reducers/timer'
import todos from './reducers/todos'
import pomodoro from './reducers/pomodoro'
import {applyMiddleware, combineReducers, createStore, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import createLogger from 'redux-logger'
import persistState from 'redux-localstorage'

const store = (function() {
  const logger = createLogger()
  const storeWithMiddleware = applyMiddleware(thunk, logger)(createStore)
  const storeWithPersistence = compose(
    persistState(['todos','pomodoro'])
  )(storeWithMiddleware)

  const reducer = combineReducers({
    timer,
    todos,
    pomodoro,
  })

  return storeWithPersistence(reducer)
})()


export default store
