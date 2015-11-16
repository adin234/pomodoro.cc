import React, {Component, PropTypes} from 'react'

export default class Todo extends Component {
  deleteTodo (todo) {
    const {actions} = this.props
    actions.deleteTodo(todo)
  }

  render () {
    const {todo} = this.props
    return  <div>
              {todo.text}
              <span onClick={()=>this.deleteTodo(todo)}>&nbsp;X</span>
            </div>
  }
}
Todo.propTypes = {
  actions: PropTypes.object.isRequired,
  todo: PropTypes.object.isRequired,
}
