require('./NavigationBar.styl')
import React, {Component} from 'react'

export default class NavigationBar extends Component {
  render () {
    const links = [{
        link:'/',text:<span className="brand">Pomodoro</span>
      }]
    return  <div className="navigation-bar">
              {links.map(({link,text})=> {
                return  <a href={link}>{text}</a>
              })}
            </div>
  }
}
