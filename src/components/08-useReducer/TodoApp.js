import React, { useReducer } from 'react'
import './styles.css'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

const initialState = [{
    id: new Date().getTime(),
    desc: 'aprender react',
    done: false,
}]


export const TodoApp = () => {
    
    const [todo, dispatch] = useReducer(todoReducer, initialState)
    
   const handleAddTodo = (newTodo) => {
       dispatch({
        type: 'add',
        payload: newTodo,
       })
   }

    const borrarTodo = (todoId) => {
        console.log(todoId)

        const action = {
            type:'delete',
            payload: todoId,
        }
        dispatch(action)
    }

    const TareaCompletada = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

  return (
    <div>
        <h1>Todo App ({todo.length}) </h1>
        <hr />
        <div className='row'>
            <div className='col-7'>
                <TodoList todo={todo} TareaCompletada = {TareaCompletada} borrarTodo = {borrarTodo}/>
            </div>

            <div className='col-5'>
                <TodoAdd handleAddTodo = {handleAddTodo}/>
            </div>
        </div>
    </div>
  )
}
