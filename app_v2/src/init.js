import Timer       from './modules/Timer'
import Sounds      from './modules/Sounds'
import reduxStore  from './reduxStore'
import {startTimer, tickTimer, resumeTimer, stopTimer, endTimer, authenticateUser}   from './actions'

window.reduxStore = reduxStore
window.startTimer = startTimer
window.resumeTimer = resumeTimer

export default function init() {
  const pomodoro = reduxStore.getState().pomodoro
  reduxStore.dispatch(resumeTimer(pomodoro))
  reduxStore.dispatch(authenticateUser())

  Timer.on('tick', (remaining) => {
    if( reduxStore.getState().settings.tickSoundEnabled ){
      Sounds.startTickingSound()
    }
    reduxStore.dispatch(tickTimer(remaining))
  })

  Timer.on('end', () => {
    reduxStore.dispatch(endTimer())
    Sounds.stopTickingSound()
    Sounds.startRingingSound()
  })
  Timer.on('stop', () => {
    Sounds.stopTickingSound()
    Sounds.startRingingSound()
  })
}
