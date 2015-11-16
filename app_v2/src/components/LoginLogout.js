import React, {Component, PropTypes} from 'react'

export default class LoginLogout extends Component {
  render () {
    const {user} = this.props
    const {avatar} = user
    if( avatar ) {
      return  <a href="/auth/logout">Logout</a>
    }
    return  <div>
              <a href="/auth/twitter" target="_self">
                <i className="icon ion-social-twitter"></i>
              </a>
              <a href="/auth/github" target="_self">
                <i className="icon ion-social-github"></i>
              </a>
            </div>
  }
}
LoginLogout.propTypes = {
  user: PropTypes.object.isRequired
}
