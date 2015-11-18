/*@flow*/
import Timer from '../modules/Timer'
import TimeFormatter from '../modules/TimeFormatter'
import NOOP from './'
export const START_TIMER = 'START_TIMER'
export const RESUME_TIMER = 'RESUME_TIMER'
export const END_TIMER = 'END_TIMER'
export const STOP_TIMER = 'STOP_TIMER'
export const TICK_TIMER = 'TICK_TIMER'

const title = 'Pomodoro.cc - Time tracking with the Pomodoro technique'

function noop():Action {
  return {type:NOOP,payload:{}}
}

export function startTimer(minutes:number, type:PomodoroType):Action {
  if( Timer.isInProgress() ){ return noop() }
  Timer.start(minutes*60)
  const startedAt = new Date
  return {
    type:START_TIMER,
    payload:{minutes, type, startedAt}
  }
}

export function resumeTimer(pomodoro:Object):Action {
  if( Timer.isInProgress() ){ return noop() }
  let remaining = 0
  if(pomodoro && pomodoro.minutes && pomodoro.startedAt ){
    let elapsed = (Date.now() -  new Date(pomodoro.startedAt).getTime())
    elapsed = elapsed/1000 << 0
    remaining = pomodoro.minutes*60 - elapsed
  }
  remaining = remaining << 0
  Timer.start(remaining)
  return {type:RESUME_TIMER, payload:{remaining}}
}

export function endTimer():Action {
  document.title = title
  return {type:END_TIMER, payload:{}}
}

export function stopTimer():Action {
  document.title = title
  Timer.stop()
  return {type:STOP_TIMER, payload:{}}
}

export function tickTimer(remaining:number):Action {
  const formatted = TimeFormatter.formatSeconds(remaining)
  document.title = `${formatted} - ${title}`
  return {type:TICK_TIMER, payload:{remaining}}
}
