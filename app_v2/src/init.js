import Timer       from './modules/Timer'
import Sounds      from './modules/Sounds'
import reduxStore  from './reduxStore'
import {tickTimer, resumeTimer, stopTimer, authenticateUser}   from './actions'

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
    reduxStore.dispatch(stopTimer())
    Sounds.stopTickingSound()
    Sounds.startRingingSound()
  })
}
