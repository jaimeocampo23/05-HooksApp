import React from 'react'
import {useForm} from '../../hooks/useForm'




export const TodoAdd = ({handleAddTodo}) => {

    const [{description}, handleInputChange, reset] = useForm({description: ''})


    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddTodo(newTodo);
        reset();

    }

  return (
    <>
        <h4>agregar TODO</h4>
        <hr/>
        <form onSubmit={handleSubmit}>
            <input 
            onChange={handleInputChange} className='form-control' 
            type='text' name='description' value={description}
            placeholder='Aprender...' autoComplete='off' autoFocus='on'/>
            <button type='submit' className='btn btn-outline-primary mt-1 btn-block'>
                agregar
            </button>
        </form>
    </>
  )
}
