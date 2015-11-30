import loading, {defaultState} from './loading'
import {getTodo} from '../actions'
import {
  AUTHENTICATE_USER_REQUEST,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  GET_TODO_ERROR,
  AUTHENTICATE_USER_SUCCESS,
  AUTHENTICATE_USER_FAILURE,
} from '../actions'

const dummyDispatch = () => {}
const dummyGetState = () => {}
const dummyAction = (type) => ({type,payload:{}})
describe('loading reducer', () => {
  it('sets default state when not specified', () => {
    expect(
      loading(undefined, dummyAction('DUMMY_ACTION'))
    ).to.deep.eql( defaultState )
  })

  it('is true after loading actions', () => {
    expect(
      loading(undefined, dummyAction(GET_TODO_REQUEST))
    ).to.deep.eql( true )
    expect(
      loading(undefined, dummyAction(AUTHENTICATE_USER_REQUEST))
    ).to.deep.eql( true )
  })

  it('is false after request actions', () => {
    expect(
      loading(true, dummyAction(GET_TODO_SUCCESS))
    ).to.deep.eql( false )
    expect(
      loading(true, dummyAction(AUTHENTICATE_USER_SUCCESS))
    ).to.deep.eql( false )
    expect(
      loading(true, dummyAction(AUTHENTICATE_USER_FAILURE))
    ).to.deep.eql( false )
  })
})
