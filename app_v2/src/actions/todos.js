/*@flow*/
import AnalyticsService from '../modules/AnalyticsService'
import TasksService from '../modules/TasksService'

export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const TOGGLE_COMPLETE_TODO = 'TOGGLE_COMPLETE_TODO'
export const GET_TODO = 'GET_TODO'
export const GET_TODO_REQUEST = 'GET_TODO_REQUEST'
export const GET_TODO_SUCCESS = 'GET_TODO_SUCCESS'
export const GET_TODO_ERROR = 'GET_TODO_ERROR'

export function getTodo() {
  return (dispatch, getState) => {
    dispatch({type:GET_TODO_REQUEST, payload:{}})
    TasksService.all()
    .then((response) => {
      const todos = response.data
      dispatch({type:GET_TODO_SUCCESS, payload:{todos}})
    })
    .catch((error) => {
      dispatch({type:GET_TODO_ERROR, payload:{error}})
    })
  }
}

export function addTodo(todo:Todo):Action{
  AnalyticsService.track('add-todo', todo)
  TasksService.create(todo)
  return {type:ADD_TODO,payload:todo}
}

export function deleteTodo(todo:Todo):Action {
  AnalyticsService.track('delete-todo', todo)
  TasksService.update(todo.id, {
    ...todo,
    deleted: true,
  })
  return {type:DELETE_TODO,payload:todo}
}

export function toggleCompleteTodo(todo:Todo):Action {
  AnalyticsService.track('toggle-complete-todo', todo)
  TasksService.update(todo.id, {
    ...todo,
    completed: !todo.completed
  })
  return {type:TOGGLE_COMPLETE_TODO,payload:todo}
}
