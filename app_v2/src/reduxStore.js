import timer from './reducers/timer'
import todos from './reducers/todos'
import pomodoro from './reducers/pomodoro'
import settings from './reducers/settings'
import user from './reducers/user'
import {applyMiddleware, combineReducers, createStore, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import createLogger from 'redux-logger'
import persistState from 'redux-localstorage'

const store = (function() {
  const logger = createLogger()
  const storeWithMiddleware = applyMiddleware(thunk, logger)(createStore)
  const storeWithPersistence = compose(
    persistState(['todos','pomodoro','settings'])
  )(storeWithMiddleware)

  const reducer = combineReducers({
    timer,
    todos,
    pomodoro,
    settings,
    user,
  })

  return storeWithPersistence(reducer)
})()


export default store
