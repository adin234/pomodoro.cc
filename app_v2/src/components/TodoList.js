require('./TodoList.styl')
const TODO_INPUT = 'TODO_INPUT'
import React, {Component, PropTypes} from 'react'
import {TextField} from 'material-ui'
import Todo from './Todo'

export default class TodoList extends Component {
  addTodo () {
    const {actions} = this.props
    const text = this.refs[TODO_INPUT].getValue()
    if( !text ) {
      return
    }
    this.refs[TODO_INPUT].clearValue()
    actions.addTodo({
      completed:false,
      text
    })
  }

  onEnterKeyDown (event) {
    this.addTodo()
  }

  render () {
    const {todos, actions} = this.props
    return  <div className="todo-list-container">
              {/*<input className="todo-input" placeholder="What do you need to do?" ref={TODO_INPUT} onKeyDown={this.onKeyDown.bind(this)}/>*/}
              <TextField
                ref={TODO_INPUT}
                onEnterKeyDown={this.onEnterKeyDown.bind(this)}
                hintText=""
                fullWidth={true}
                inputStyle={{fontSize:"1.3em", textAlign:"center"}}
                floatingLabelStyle={{color: "grey", fontSize:"1.3em", textAlign:"center"}}
                floatingLabelText="What do you need to do?"
                underlineFocusStyle={{borderColor:"grey", textAlign:"center"}}/>

              <ul className="todo-list">
                {todos.map((todo) => {
                  return <Todo key={todo.text} todo={todo} actions={actions}/>
                })}
              </ul>
            </div>
  }
}
TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
}
