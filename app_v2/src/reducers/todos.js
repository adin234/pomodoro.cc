/*@flow*/
import {ADD_TODO, DELETE_TODO, TOGGLE_COMPLETE_TODO, GET_TODO_SUCCESS} from '../actions/todos'

export default function todos(state:TodoState=[], action:Action):TodoState {
  switch(action.type){
  case GET_TODO_SUCCESS: {
    return action.payload.todos
  }
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
  case TOGGLE_COMPLETE_TODO: {
    return state.map((todo) => {
      if( todo !== action.payload ) {
        return todo
      }
      return {
        ...todo,
        completed: !todo.completed
      }
    })
  }
  }
  return state
}
