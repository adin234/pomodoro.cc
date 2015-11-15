import settings, {defaultState} from './settings'
import {toggleTickSound, toggleRingSound} from '../actions'

describe('settings reducer', () => {
  const dummyAction = {type:'',payload:{}}
  it('default state', () => {
    expect( settings(undefined, dummyAction) )
    .to.deep.eql( defaultState )
  })

  it('toggles specific settings', () => {
    expect( settings(defaultState, toggleTickSound()) )
    .to.deep.eql( {
      tickSoundEnabled: false,
      ringSoundEnabled: true,
    } )

    expect( settings(defaultState, toggleRingSound()) )
    .to.deep.eql( {
      tickSoundEnabled: true,
      ringSoundEnabled: false,
    } )
  })
})
