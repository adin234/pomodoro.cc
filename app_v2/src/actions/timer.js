/*@flow*/
import {START_TIMER, STOP_TIMER, TICK_TIMER} from './actionTypes'
export function startTimer(seconds:number):Action {
  return {
    type:START_TIMER,
    payload:{seconds}
  }
}

export function stopTimer():Action {
  return {
    type:STOP_TIMER,
    payload:{}
  }
}

export function tickTimer(remaining:string):Action {
  return {
    type:TICK_TIMER,
    payload:{remaining}
  }
}
