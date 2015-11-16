/*@flow*/
import {START_TIMER, STOP_TIMER} from '../actions/timer'

const initialState = {}

export default function pomodoro(state:PomodoroState=initialState, action:Action):PomodoroState {
  switch(action.type) {
  case START_TIMER: {
    return action.payload
  }
  case STOP_TIMER: {
    return initialState
  }
  }
  return state
}
