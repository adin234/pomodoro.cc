require('./Todo.styl')
import React, {Component, PropTypes} from 'react'

export default class Todo extends Component {
  deleteTodo (todo) {
    const {actions} = this.props
    actions.deleteTodo(todo)
  }

  render () {
    const {todo} = this.props
    return  <div className="todo">
              <i onClick={()=>this.deleteTodo(todo)} className="ion-checkmark-round"/>
              {todo.text}
            </div>
  }
}
Todo.propTypes = {
  actions: PropTypes.object.isRequired,
  todo: PropTypes.object.isRequired,
}
