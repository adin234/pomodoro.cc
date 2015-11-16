import Profile from './Profile'
import React, {Component, PropTypes} from 'react'

export default class Header extends Component {
  render () {
    const {user, actions} = this.props
    return  <div>
              <Profile user={user}/>
            </div>
  }
}

Header.propTypes = {
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
}
