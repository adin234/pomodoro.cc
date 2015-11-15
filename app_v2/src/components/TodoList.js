const TODO_INPUT = 'TODO_INPUT'
import React, {Component} from 'react'

export default class TodoList extends Component {
  addTodo () {
    const {actions} = this.props
    const text = this.refs[TODO_INPUT].value
    actions.addTodo({
      completed:false,
      text
    })
  }

  deleteTodo (todo) {
    const {actions} = this.props
    actions.deleteTodo(todo)
  }

  render () {
    const {todos, actions} = this.props
    return  <div>
              <ul>
                {todos.map((todo) => {
                  return <li onClick={()=>this.deleteTodo(todo)}>{todo.text}</li>
                })}
              </ul>
              <input ref={TODO_INPUT}/>
              <button onClick={()=>this.addTodo()}>add todo</button>
            </div>
  }
}
