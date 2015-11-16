require('./Profile.styl')

import React, {Component, PropTypes} from 'react'

export default class Profile extends Component {
  render () {
    const {user} = this.props
    const {avatar, username} = user
    if( !username ) {
      return  null
    }
    return  <div className="profile">
              <img src={avatar}/> <span>{username}</span>
            </div>
  }
}
Profile.propTypes = {
  user: PropTypes.object.isRequired
}
