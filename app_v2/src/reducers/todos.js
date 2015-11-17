/*@flow*/
import {ADD_TODO, DELETE_TODO, COMPLETE_TODO} from '../actions/todos'

export default function todos(state:TodoState=[], action:Action):TodoState {
  switch(action.type){
  case ADD_TODO: {
    return [
      ...state,
      action.payload
    ]
  }
  case DELETE_TODO: {
    return state.filter((todo) => {
      return todo.text !== action.payload.text
    })
  }
  case COMPLETE_TODO: {
    return state.map((todo) => {
      if( todo !== action.payload ) {
        return todo
      }
      return {
        ...todo,
        completed: true
      }
    })
  }
  }
  return state
}
