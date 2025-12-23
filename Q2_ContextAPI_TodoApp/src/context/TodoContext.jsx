import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';
import TodoItem from '../components/TodoItem';


export const TodoContext=createContext()

const TodoProvider = ({children}) => {

    const [todos,setTodos]= useState([]);

    const addTodos=(text)=>{

     if(!text) return null

     
        setTodos([...todos, {id: Date.now(), text , completed:false}])
        
    }
    const deleteTodos=(id)=>{

        setTodos(todos.filter((todo)=> todo.id!==id))        

    }   

    const updateTodos=(id, newText)=>{

        setTodos(todos.map((todo)=>(

            todo.id===id ? {...todo , text:newText} : todo

        )
    ))

    }

  return (
    <div>
      <TodoContext.Provider value = {{todos, addTodos, deleteTodos, updateTodos}}>
      {children}
      </TodoContext.Provider>
    </div>
  )
}

export default TodoProvider
