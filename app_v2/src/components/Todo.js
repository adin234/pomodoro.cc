require('./Todo.styl')
import React, {Component, PropTypes} from 'react'

export default class Todo extends Component {
  render () {
    const {todo, actions} = this.props
    const className = "todo " + (todo.completed?"completed":"")
    return  <li className={className}>
              <input className="toggle" type="checkbox"
                checked={todo.completed}
                onClick={()=>actions.toggleCompleteTodo(todo)}/>
              <label>{todo.text}</label>
              <button
                className="destroy"
                onClick={()=>actions.deleteTodo(todo)}></button>
            </li>
  }
}
Todo.propTypes = {
  actions: PropTypes.object.isRequired,
  todo: PropTypes.object.isRequired,
}
