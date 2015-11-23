/*@flow*/
import AnalyticsService from '../modules/AnalyticsService'

export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const TOGGLE_COMPLETE_TODO = 'TOGGLE_COMPLETE_TODO'

export function addTodo(todo:Todo):Action{
  AnalyticsService.track('add-todo', todo)
  return {type:ADD_TODO,payload:todo}
}

export function deleteTodo(todo:Todo):Action {
  AnalyticsService.track('delete-todo', todo)
  return {type:DELETE_TODO,payload:todo}
}

export function toggleCompleteTodo(todo:Todo):Action {
  AnalyticsService.track('toggle-complete-todo', todo)
  return {type:TOGGLE_COMPLETE_TODO,payload:todo}
}
