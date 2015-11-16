const TODO_INPUT = 'TODO_INPUT'
import React, {Component, PropTypes} from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
  addTodo () {
    const {actions} = this.props
    const text = this.refs[TODO_INPUT].value
    if( !text ) {
      return
    }
    this.refs[TODO_INPUT].value = ''
    actions.addTodo({
      completed:false,
      text
    })
  }

  onKeyDown (event) {
    if(event.keyCode!==13){
      return
    }
    this.addTodo()
  }

  render () {
    const {todos, actions} = this.props
    return  <div>
              <div>
                {todos.map((todo) => {
                  return <Todo key={todo.text} todo={todo} actions={actions}/>
                })}
              </div>
              <input ref={TODO_INPUT} onKeyDown={this.onKeyDown.bind(this)}/>
            </div>
  }
}
TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
}
