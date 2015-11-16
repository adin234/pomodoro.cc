/*@flow*/
import Timer from '../modules/Timer'
import TimeFormatter from '../modules/TimeFormatter'
import {START_TIMER, RESUME_TIMER, STOP_TIMER, TICK_TIMER} from '../actions/timer'

const title = 'Pomodoro.cc - Time tracking with the Pomodoro technique'

export default function timer(state:TimerState='00:00', action:Action):TimerState{
  switch(action.type){
  case START_TIMER: {
    if( Timer.isInProgress() ){ return state }
    const remaining = Timer.start(action.payload.minutes*60)
    return format(remaining)
  }
  case RESUME_TIMER: {
    if( Timer.isInProgress() ){ return state }
    const remaining = Timer.start(action.payload.remaining)
    return format(remaining)
  }
  case STOP_TIMER: {
    const remaining = Timer.stop()
    document.title = title
    return format(remaining)
  }
  case TICK_TIMER: {
    const remaining = format(action.payload.remaining)
    document.title = `${remaining} - ${title}`
    return remaining
  }
  }
  return state
}

function format(seconds) {
  return TimeFormatter.formatSeconds(seconds)
}
