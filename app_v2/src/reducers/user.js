/*@flow*/
import {
  AUTHENTICATE_USER_REQUEST,
  AUTHENTICATE_USER_SUCCESS,
  AUTHENTICATE_USER_FAILURE,
  authenticateUser
} from '../actions'

export default function user(state:UserState, action:Action):UserState {
  switch(action.type){
  case AUTHENTICATE_USER: {
    return state
  }
  case AUTHENTICATE_USER_SUCCESS: {
    return state
  }
  case AUTHENTICATE_USER_FAILURE: {
    return state
  }
  }
  return state
}
