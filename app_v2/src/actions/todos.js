/*@flow*/
export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const TOGGLE_COMPLETE_TODO = 'TOGGLE_COMPLETE_TODO'

export function addTodo(todo:Todo):Action{
  return {type:ADD_TODO,payload:todo}
}

export function deleteTodo(todo:Todo):Action {
  return {type:DELETE_TODO,payload:todo}
}

export function toggleCompleteTodo(todo:Todo):Action {
  return {type:TOGGLE_COMPLETE_TODO,payload:todo}
}
