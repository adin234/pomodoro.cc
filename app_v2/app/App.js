'use strict'
import React from 'react'

import Header from './Components/Header'
import Content from './Components/Content'


module.exports = React.createClass({
  displayName: 'App',

  render: function () {
    return (<div>
              <Header/>
              <Content/>
            </div>)
  }

})
