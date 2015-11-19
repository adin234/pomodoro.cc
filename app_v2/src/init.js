import Timer       from './modules/Timer'
import Sounds      from './modules/Sounds'
import reduxStore  from './reduxStore'
import {startTimer, tickTimer, resumeTimer, stopTimer, endTimer, authenticateUser}   from './actions'

import NProgress from 'nprogress'
require('nprogress/nprogress.css')

window.NProgress = NProgress

window.reduxStore = reduxStore
window.startTimer = startTimer
window.resumeTimer = resumeTimer

export default function init() {
  const pomodoro = reduxStore.getState().pomodoro
  reduxStore.dispatch(resumeTimer(pomodoro))
  reduxStore.dispatch(authenticateUser())

  NProgress.configure({
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

  Timer.on('end', () => {
    NProgress.done()
    reduxStore.dispatch(endTimer())
    Sounds.stopTickingSound()
    Sounds.startRingingSound()
  })
  Timer.on('stop', () => {
    Sounds.stopTickingSound()
    Sounds.startRingingSound()
  })
}
