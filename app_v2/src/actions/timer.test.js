import {startTimer, resumeTimer} from './timer'
describe('actions timer', () => {
  it('startTimer - sets "started" property to payload', () => {
    const minutes = 25, type = 'pomodoro'
    const expectedStartedAt = new Date()
    const action = startTimer(minutes, type)
    expect( action.payload )
      .to.have.property('startedAt')
      .that.deep.equals( expectedStartedAt )
  })

  describe('resumeTimer', () => {
    it('sets "remaining" property to payload', () => {
      const minutes = 25, startedAt = Date.now()-1000
      const pomodoro = {minutes,startedAt}
      const expectedRemaining = minutes*60 - 1
      const action = resumeTimer(pomodoro)
      expect( action.payload )
        .to.have.property('remaining')
        .that.deep.equals( expectedRemaining )
    })
  })
})
