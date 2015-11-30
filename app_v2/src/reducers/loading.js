/*@flow*/
import {
  AUTHENTICATE_USER_REQUEST,
  AUTHENTICATE_USER_SUCCESS,
  AUTHENTICATE_USER_FAILURE,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  GET_TODO_ERROR,
} from '../actions'

export const defaultState = false

export default function pomodoro(state:LoadingState=defaultState, action:Action):LoadingState {
  switch(action.type) {
    case AUTHENTICATE_USER_REQUEST:
    case ADD_TODO_REQUEST:
    case GET_TODO_REQUEST:
      return true
    case AUTHENTICATE_USER_SUCCESS:
    case AUTHENTICATE_USER_FAILURE:
    case ADD_TODO_SUCCESS:
    case ADD_TODO_ERROR:
    case GET_TODO_SUCCESS:
    case GET_TODO_ERROR:
      return false
  }
  return state
}
