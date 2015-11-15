import todos from './todos'
import {addTodo, deleteTodo} from '../actions'
describe('todos reducer', () => {
  const todo = {completed:false,text:'i am todo'}
  const todo2 = {completed:true,text:'i am todo2'}
  it('adds todo', () => {
    let state = []
    state = todos(state, addTodo(todo))
    expect( state ).to.deep.eql( [todo] )
    state = todos(state, addTodo(todo2))
    expect( state ).to.deep.eql( [todo, todo2] )
  })
  it('deletes todo', () => {
    let state = [todo, todo2]
    state = todos(state, deleteTodo(todo))
    expect( state ).to.deep.eql( [todo2] )
    state = todos(state, deleteTodo(todo2))
    expect( state ).to.deep.eql( [] )
  })
})
