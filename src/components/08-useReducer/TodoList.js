import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todo, TareaCompletada, borrarTodo}) => {
  return (
    <ul className='list-group list-group-flush'>
    {
        todo.map((todos, i) => (
            <TodoListItem key={todos.id}
            todos = {todos} 
            index = {i} 
            TareaCompletada = {TareaCompletada} 
            borrarTodo = {borrarTodo} />
        ))
    }
    </ul>
  )
}
