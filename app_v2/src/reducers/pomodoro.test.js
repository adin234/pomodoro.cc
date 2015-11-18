import pomodoro, {defaultState} from './pomodoro'
import {startTimer, stopTimer} from '../actions'

describe('pomodoro reducer', () => {
  it('sets state only if not set', () => {
    let action = startTimer(25,'pomodoro')
    const expectedState = action.payload
    expect(
      pomodoro({}, action)
    ).to.deep.eql(expectedState)

    action = startTimer(5,'pomodoro')
    const currentState = action.payload
    expect(
      pomodoro(currentState, action)
    ).to.deep.eql(currentState)
  })

  it('when timer is stopped or ends resets store', () => {
    let action = stopTimer()
    expect(
      pomodoro({}, action)
    ).to.deep.eql(defaultState)
  })
})
