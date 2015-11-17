require('./Todo.styl')
import React, {Component, PropTypes} from 'react'

export default class Todo extends Component {
  deleteTodo (todo) {
    const {actions} = this.props
    actions.deleteTodo(todo)
  }

  toggleCompleteTodo (todo) {
    const {actions} = this.props
    actions.toggleCompleteTodo(todo)
  }

  render () {
    const {todo} = this.props
    const className = "todo " + (todo.completed?"completed":"")
    return  <li className={className}>
              <input className="toggle" type="checkbox" onClick={()=>this.toggleCompleteTodo(todo)}/>
              <label>{todo.text}</label>
              <button onClick={()=>this.deleteTodo(todo)} className="destroy"></button>
            </li>
  }
}
Todo.propTypes = {
  actions: PropTypes.object.isRequired,
  todo: PropTypes.object.isRequired,
}
