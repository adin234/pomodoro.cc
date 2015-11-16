require('./TopBar.styl')

import Profile from './Profile'
import NavigationBar from './NavigationBar'
import LoginLogout from './LoginLogout'
import React, {Component, PropTypes} from 'react'

export default class TopBar extends Component {
  render () {
    const {user, actions} = this.props
    return  <div className="top-bar">
              <NavigationBar/>
              <LoginLogout user={user}/>
              <Profile user={user}/>
            </div>
  }
}

TopBar.propTypes = {
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
}
