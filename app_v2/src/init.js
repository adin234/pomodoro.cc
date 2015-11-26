require('nprogress/nprogress.css')
import Timer       from './modules/Timer'
import Sounds      from './modules/Sounds'
import reduxStore  from './reduxStore'
import {tickTimer, resumeTimer, endTimer, authenticateUser} from './actions'
import NProgress from 'nprogress'

export default function init() {
  const pomodoro = reduxStore.getState().pomodoro
  reduxStore.dispatch(resumeTimer(pomodoro))
  reduxStore.dispatch(authenticateUser())

  NProgress.configure({
    minimum: 0.0,
    trickle: false,
    showSpinner: false,
  })

  Timer.on('start', () => {
    NProgress.set(0)
  })

  Timer.on('tick', (remaining, total) => {
    const state = reduxStore.getState()
    if( state.settings.tickSoundEnabled ){
      Sounds.startTickingSound()
    }
    reduxStore.dispatch(tickTimer(remaining))
    NProgress.set(1 - remaining/(state.pomodoro.minutes*60))
  })

  Timer.on('forceEnd', cleanupTimer)
  Timer.on('end', () => {
    reduxStore.dispatch(endTimer())
    cleanupTimer()
  })

  function cleanupTimer() {
    NProgress.done()
    Sounds.stopTickingSound()
    Sounds.startRingingSound()
  }
}
