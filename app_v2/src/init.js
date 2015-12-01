require('nprogress/nprogress.css')
import Timer       from './modules/Timer'
import Sounds      from './modules/Sounds'
import reduxStore  from './reduxStore'
import {tickTimer, resumeTimer, endTimer, authenticateUser, getTodo} from './actions'

export default function init() {
  const pomodoro = reduxStore.getState().pomodoro
  reduxStore.dispatch(resumeTimer(pomodoro))
  reduxStore.dispatch(authenticateUser())

  Timer.on('tick', (remaining, total) => {
    const state = reduxStore.getState()
    if( state.settings.tickSoundEnabled ){
      Sounds.startTickingSound()
    }
    reduxStore.dispatch(tickTimer(remaining))
  })

  Timer.on('forceEnd', cleanupTimer)
  Timer.on('end', () => {
    reduxStore.dispatch(endTimer())
    cleanupTimer()
  })

  function cleanupTimer() {
    Sounds.stopTickingSound()
    Sounds.startRingingSound()
  }
}
