/*@flow*/
import Timer from '../modules/Timer'
import TimeFormatter from '../modules/TimeFormatter'
import store from 'store'
import {START_TIMER, RESUME_TIMER, STOP_TIMER, TICK_TIMER} from '../actions/timer'

export default function timer(state:TimerState='00:00', action:Action):TimerState{
  switch(action.type){
  case START_TIMER: {
    store.set('pomodoro', action.payload)
    const remaining = Timer.start(action.payload.minutes*60)
    return format(remaining)
  }
  case RESUME_TIMER: {
    const remaining = Timer.start(action.payload.remaining)
    return format(remaining)
  }
  case STOP_TIMER: {
    store.remove('pomodoro')
    const remaining = Timer.stop()
    return format(remaining)
  }
  case TICK_TIMER: {
    return format(action.payload.remaining)
  }
  }
  return state
}

function format(seconds) {
  return TimeFormatter.formatSeconds(seconds)
}
