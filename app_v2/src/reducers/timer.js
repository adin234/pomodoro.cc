/*@flow*/
import Timer from '../modules/Timer'
import TimeFormatter from '../modules/TimeFormatter'
import {START_TIMER, STOP_TIMER, TICK_TIMER} from '../actions/timer'
export default function timer(state:TimerState='00:00', action:Action):TimerState{
  switch(action.type){
  case START_TIMER: {
    return format(Timer.start(action.payload.seconds))
  }
  case STOP_TIMER: {
    return format(Timer.stop())
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
