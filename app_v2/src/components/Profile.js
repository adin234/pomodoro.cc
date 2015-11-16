require('./Profile.styl')

import React, {Component} from 'react'

export default class Profile extends Component {
  render () {
    const {user, actions} = this.props
    const {avatar, username} = user
    if( !username ) {
      return  null
    }
    return  <div className="profile">
              <img src={avatar}/> <span>{username}</span>
            </div>
  }
}
