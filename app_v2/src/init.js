import Timer       from './modules/Timer'
import Sounds      from './modules/Sounds'
import reduxStore  from './reduxStore'
import {tickTimer, resumeTimer, authenticateUser}   from './actions'

export default function init() {
  const pomodoro = reduxStore.getState().pomodoro
  reduxStore.dispatch(resumeTimer(pomodoro))
  reduxStore.dispatch(authenticateUser())

  Timer.on('tick', (remaining) => {
    Sounds.startTickingSound()
    reduxStore.dispatch(tickTimer(remaining))
  })

  Timer.on('end', () => {
    Sounds.stopTickingSound()
    Sounds.startRingingSound()
  })
}
