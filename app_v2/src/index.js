import {Timer}       from './modules/Timer'
import {store}       from './store'
import React         from 'react'
import {render}      from 'react-dom'
import {tickTimer}   from './actions'
import Main from './Main'

Timer.on('tick', (remaining) => {
  store.dispatch(tickTimer(remaining))
})

render(<Main/>, document.getElementById('main'))
