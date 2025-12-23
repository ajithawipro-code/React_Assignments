import React from 'react'
import { TodoContext } from '../context/TodoContext'
import { useContext } from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {

    const { todos } = useContext(TodoContext)

  return (
    <div>
          
          {

             todos.map((todo)=>(
            <TodoItem key={todo.id} id={todo.id} text={todo.text}  />
          ))
        }
        

    </div>
  )
}

export default TodoList
