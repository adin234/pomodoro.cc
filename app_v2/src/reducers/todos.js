/*@flow*/
import {
  ADD_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  GET_TODO_SUCCESS,
  UPDATE_TODO_SUCCESS
} from '../actions/todos'

export default function todos(state:TodoState=[], action:Action):TodoState {
  // debugger
  switch(action.type){
  case GET_TODO_SUCCESS: {
    return action.payload.todos
  }
  case ADD_TODO_SUCCESS: {
    let newTodo = action.payload
    if( !newTodo.id ){
      newTodo.id = state.reduce((acc, v) => (acc > v ? acc : v), 0)
    }
    return [
      ...state,
      newTodo
    ]
  }
  case DELETE_TODO_SUCCESS: {
    return state.filter((todo) => {
      return todo.text !== action.payload.text
    })
  }
  case UPDATE_TODO_SUCCESS: {
    return state.map((todo) => {
      return (todo.id !== action.payload.id)
              ? todo
              : action.payload
    })
  }
  }
  return state
}

const sortCompleted = (todos) => {
  return todos.sort((t) => t.completed)
}
