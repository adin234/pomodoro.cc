/*@flow*/
import {
  AUTHENTICATE_USER_REQUEST,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  GET_TODO_ERROR,
  AUTHENTICATE_USER_SUCCESS,
  AUTHENTICATE_USER_FAILURE,
} from '../actions'

export const defaultState = false

export default function pomodoro(state:LoadingState=defaultState, action:Action):LoadingState {
  switch(action.type) {
    case GET_TODO_REQUEST:
    case AUTHENTICATE_USER_REQUEST:
      return true
    case GET_TODO_SUCCESS:
    case GET_TODO_ERROR:
    case AUTHENTICATE_USER_SUCCESS:
    case AUTHENTICATE_USER_FAILURE:
      return false
  }
  return state
}
