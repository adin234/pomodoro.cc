import Timer         from './modules/Timer'
import reduxStore    from './reduxStore'
import {tickTimer, resumeTimer}   from './actions'
import Main          from './Main'
import React         from 'react'
import {render}      from 'react-dom'
import store         from 'store'

const pomodoro = store.get('pomodoro')
reduxStore.dispatch(resumeTimer(pomodoro))

Timer.on('tick', (remaining) => {
  reduxStore.dispatch(tickTimer(remaining))
})

render(<Main/>, document.getElementById('main'))
