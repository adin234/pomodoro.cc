'use strict'
import React from 'react'
import App        from './App.js'
import {store}    from './store'
import {render}   from 'react-dom'
import {Provider} from 'react-redux'

render(<Provider store={store}>
         <App/>
       </Provider>,
  document.getElementById('main'))
