require('normalize.css')
require('./index.styl')

import Router        from './Router'
import React         from 'react'
import {render}      from 'react-dom'
import init          from './init'

require("react-tap-event-plugin")()
init()
render(<Router/>, document.getElementById('main'))
