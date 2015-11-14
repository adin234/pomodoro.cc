'use strict'
import App        from './App.js'
import {Timer}    from './modules/Timer'
import {store}    from './store'
import React      from 'react'
import {render}   from 'react-dom'
import {Provider} from 'react-redux'
import {startTimer, tickTimer} from './actions'

Timer.on('tick', (remaining) => {
  store.dispatch(tickTimer(remaining))
})

render(<Provider store={store}>
         <App/>
       </Provider>,
  document.getElementById('main'))
