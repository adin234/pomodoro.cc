require('./Todo.styl')
import React, {Component, PropTypes} from 'react'

export default class Todo extends Component {
  deleteTodo (todo) {
    const {actions} = this.props
    actions.deleteTodo(todo)
  }

  render () {
    const {todo} = this.props
    return  <li className="todo">
              <input className="toggle" type="checkbox"/>
              <label>{todo.text}</label>
              <button onClick={()=>this.deleteTodo(todo)} className="destroy"></button>
            </li>
  }
}
Todo.propTypes = {
  actions: PropTypes.object.isRequired,
  todo: PropTypes.object.isRequired,
}
