import {DUMMY} from './actionTypes'
export function dummy() {
  return {type: DUMMY, payload: {}}
}

export function dummyAsync() {
  return function(dispatch, getState){
    setInterval(function(){
      dispatch(dummy())
    }, 1000)
    // setInterval(dispatch.bind(this, dummy()), 1000)
  }
}
