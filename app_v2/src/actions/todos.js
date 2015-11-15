/*@flow*/
export const ADD_TODO = 'ADD_TODO'

export function addTodo(todo:Todo):Action{
  return {type:ADD_TODO,payload:todo}
}
