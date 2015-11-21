require('normalize.css')
require('./index.styl')

import Router        from './Router'
import React         from 'react'
import {render}      from 'react-dom'
import init          from './init'

const injectTapEventPlugin = require("react-tap-event-plugin")
injectTapEventPlugin()

init()

render(<Router/>, document.getElementById('main'))
