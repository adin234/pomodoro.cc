import settings, {defaultState} from './settings'
import {toggleTickSound, toggleRingSound, grantNotificationPermission} from '../actions'

const dummyAction = {type:'',payload:{}}

describe('settings reducer', () => {
  it('sets default state when not specified', () => {
    expect(
      settings(undefined, dummyAction)
    ).to.deep.eql( defaultState )
  })

  it('toggles specific settings', () => {
    expect(
      settings(defaultState, toggleTickSound())
    ).to.deep.eql({
      tickSoundEnabled: false,
      ringSoundEnabled: true,
      notificationPermissionGranted: false,
    })

    expect(
      settings(defaultState, toggleRingSound())
    ).to.deep.eql({
      tickSoundEnabled: true,
      ringSoundEnabled: false,
      notificationPermissionGranted: false,
    })
  })

  it('persists notificationPermissionGranted', () => {
    expect(
      settings(defaultState, grantNotificationPermission(true))
    ).to.deep.eql({
      tickSoundEnabled: true,
      ringSoundEnabled: true,
      notificationPermissionGranted: true
    })
  })
})
