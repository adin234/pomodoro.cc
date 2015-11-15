/*@flow*/
import {START_TIMER, STOP_TIMER} from '../actions/timer'
const defaultState = {}

export default function pomodoro(state:PomodoroState=defaultState, action:Action):PomodoroState{
  switch(action.type) {
  case START_TIMER: {
    return action.payload
  }
  case STOP_TIMER: {
    return defaultState
  }
  }
  return state
}
