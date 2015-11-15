/*@flow*/
import {ADD_TODO} from '../actions/todos'
export default function todos(state:TodoState=[], action:Action):TodoState {
  switch(action.type){
  case ADD_TODO: {
    return [
      ...state,
      action.payload
    ]
  }
  }
  return state
}
