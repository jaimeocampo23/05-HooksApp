import React from 'react'

export const TodoListItem = ({todos,index,TareaCompletada,borrarTodo}) => {
  return (
    <li key={todos.id} className='list-group-item'> 
                <p onClick={() => TareaCompletada(todos.id)} 
                className={ todos.done ? 'complete': ''}>{index + 1} {todos.desc} </p>
                <button className='btn btn-danger' onClick={() => borrarTodo(todos.id)}>
                    Borrar
                </button>
            </li>
  )
}
