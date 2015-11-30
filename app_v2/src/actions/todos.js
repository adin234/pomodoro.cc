/*@flow*/
import AnalyticsService from '../modules/AnalyticsService'
import TasksService from '../modules/TasksService'

export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST'
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS'
export const ADD_TODO_ERROR = 'ADD_TODO_ERROR'
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS'
export const TOGGLE_COMPLETE_TODO_SUCCESS = 'TOGGLE_COMPLETE_TODO_SUCCESS'
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
  return (dispatch, getState) => {
    dispatch({type:ADD_TODO_REQUEST,payload:{}})
    TasksService.create(todo)
    .then((response) => {
      const todo = response.data
      dispatch({type:ADD_TODO_SUCCESS,payload:todo})
    })
    .catch(() => {
      dispatch({type:ADD_TODO_ERROR,payload:{}})
    })
  }
}

export function deleteTodo(todo:Todo):Action {
  AnalyticsService.track('delete-todo', todo)
  return (dispatch, getState) => {
    TasksService.update(todo.id, {
      ...todo,
      deleted: true,
    })
    .then(() => {
      dispatch({type:DELETE_TODO_SUCCESS,payload:todo})
    })
  }
}

export function toggleCompleteTodo(todo:Todo):Action {
  AnalyticsService.track('toggle-complete-todo', todo)
  return (dispatch, getState) => {
    TasksService.update(todo.id, {
      ...todo,
      completed: !todo.completed
    })
    .then(() => {
      dispatch({type:TOGGLE_COMPLETE_TODO_SUCCESS,payload:todo})
    })
  }
}
