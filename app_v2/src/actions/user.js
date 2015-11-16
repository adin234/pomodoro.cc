/*@flow*/
export const AUTHENTICATE_USER_REQUEST = 'AUTHENTICATE_USER_REQUEST'
export const AUTHENTICATE_USER_SUCCESS = 'AUTHENTICATE_USER_SUCCESS'
export const AUTHENTICATE_USER_FAILURE = 'AUTHENTICATE_USER_FAILURE'

export function authenticateUser():Action {
  return (dispatch, getState) => {
    dispatch(authenticateUserRequest())
  }
}
export function authenticateUserRequest():Action {
  return {type:AUTHENTICATE_USER_REQUEST, payload:{}}
}
export function authenticateUserSuccess(user):Action {
  return {type:AUTHENTICATE_USER_SUCCESS, payload:user}
}
export function authenticateUserFailure(error):Action {
  return {type:AUTHENTICATE_USER_FAILURE, payload:error}
}
