require('./TopBar.styl')

import Profile from './Profile'
import NavigationBar from './NavigationBar'
import LoginLogout from './LoginLogout'
import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'

export default class TopBar extends Component {
  render () {
    const {user, actions} = this.props
    return  <div className="top-bar-container">
              <div className="top-bar">
                <NavigationBar/>
                <Link to="/login" style={{"float":"right"}}>Login</Link>
                <Profile user={user}/>
              </div>
            </div>
  }
}

TopBar.propTypes = {
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
}
