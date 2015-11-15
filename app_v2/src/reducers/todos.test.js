import todos from './todos'
import {addTodo} from '../actions'
describe('todos reducer', () => {
  const todo = {completed:false,text:'i am todo'}
  it('adds todo', () => {
    let state = []
    state = todos(state, addTodo(todo))
    expect( state ).to.deep.eql( [todo] )
    state = todos(state, addTodo(todo))
    expect( state ).to.deep.eql( [todo, todo] )
  })
})
