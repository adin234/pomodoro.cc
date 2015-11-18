/*@flow*/
import {START_TIMER, END_TIMER} from '../actions/timer'

export const defaultState = {}

export default function pomodoro(state:PomodoroState=defaultState, action:Action):PomodoroState {
  switch(action.type) {
  case START_TIMER: {
    if( state.minutes !== undefined ){
      return state
    }
    return action.payload
  }
  case END_TIMER: {
    return defaultState
  }
  }
  return state
}
