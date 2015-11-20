require('./NavigationBar.styl')
import React, {Component} from 'react'

export default class NavigationBar extends Component {
  render () {
    const links = [{
        link:'/',element:<span className="brand">Pomodoro<span className="tld">.cc</span></span>
      }]
    return  <div className="navigation-bar">
              {links.map(({link,element})=> {
                return  <a href={link}>{element}</a>
              })}
            </div>
  }
}
