/*@flow*/
import { AUTHENTICATE_USER_REQUEST,
  AUTHENTICATE_USER_SUCCESS,
  AUTHENTICATE_USER_FAILURE,
  authenticateUser } from '../actions'

const initialState = {}

export default function user(state:UserState=initialState, action:Action):UserState {
  switch(action.type){
  case AUTHENTICATE_USER_REQUEST: {
    return initialState
  }
  case AUTHENTICATE_USER_SUCCESS: {
    return action.payload.user
  }
  case AUTHENTICATE_USER_FAILURE: {
    return initialState
  }
  }
  return state
}
