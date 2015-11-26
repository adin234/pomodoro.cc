require('./NavigationBar.styl')
import React, {Component} from 'react'
import {Link} from 'react-router'

export default class NavigationBar extends Component {
  render () {
    return  <div className="navigation-bar">
              <Link to="/">
                <span className="brand">Pomodoro<span className="tld">.cc</span></span>
              </Link>
              <a href="/blog" target="_blank">
                Blog
              </a>
            </div>
  }
}
