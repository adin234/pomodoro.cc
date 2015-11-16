import user from './user'
import {authenticateUser} from '../actions'
import AuthService from '../modules/AuthService'

describe.skip('user reducer', () => {
  describe('authenticates user', () => {
    const user = {username:'test user'}
    it('sets user on success', () => {
      const MockAuthService = sinon.mock(AuthService)
      MockAuthService.expects('authenticate').returns()

      user(undefined, authenticateUser())

      MockAuthService.verify()
    })
  })
})
