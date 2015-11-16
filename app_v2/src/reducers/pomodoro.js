/*@flow*/
import {START_TIMER, STOP_TIMER} from '../actions/timer'

export default function pomodoro(state:PomodoroState, action:Action):PomodoroState {
  switch(action.type) {
  case START_TIMER: {
    return action.payload
  }
  case STOP_TIMER: {
    return undefined
  }
  }
  return state
}
