import Router          from './Router'
import React         from 'react'
import {render}      from 'react-dom'
import init          from './init'

init()

render(<Router/>, document.getElementById('main'))
