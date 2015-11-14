/*@flow*/
import {Timer} from '../modules/Timer'
import {TimeFormatter} from '../modules/TimeFormatter'
import {START_TIMER, STOP_TIMER, TICK_TIMER} from '../actions/actionTypes'
export default function timer(state:TimerState='00:00', action:Action):TimerState{
  switch(action.type){
  case START_TIMER: {
    Timer.start(action.payload.seconds)
    return state
  }
  case STOP_TIMER: {
    Timer.stop()
    return '00:00'
  }
  case TICK_TIMER: {
    return TimeFormatter.formatSeconds(action.payload.remaining)
  }
  default: {
    return state
  }
  }
}
