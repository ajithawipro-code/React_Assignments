import React, { useState, useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

export const TodoItem = ({ id, text }) => {

    const {deleteTodos, updateTodos} = useContext(TodoContext)

    const handleDelete=()=>{

        deleteTodos(id);

    }
  

      const handleUpdate=()=>{

        const newTextupdate = prompt(id, text);    

        updateTodos(id, newTextupdate)       


    }


  return (
    <div>
          <span>task : {text}</span>

          <button onClick={handleDelete}>Delete</button>
           
        <button onClick={handleUpdate}>Update</button>


    

    </div>
  )
}

export default TodoItem