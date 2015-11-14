/*@flow*/
export default function dummy(state:SimpleState=[], action:Action):SimpleState {
  return [
    ...state,
    0
  ]
}
