import React from "react";
import { useState, useEffect } from "react";

import TodoCard from './TodoCard'

function TodoList(){

    const[todos,setTodos]=useState([])

    useEffect(()=>{

        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response=>response.json())
            .then(data=>{
                setTodos(data.slice(0,15));
            })

            return()=>{
                alert("Cleanup Worked");
            }

    },[])


    return (

<>
            <h2>Todo List</h2>
    <div className="todolist">
       
       
          {
            todos.map(todo=>(

                <TodoCard key={todo.id}
                     userid={todo.userId}
                     title={todo.title}
                     completed={todo.completed} />
                     
                     
            ))
                
            
        }

        
               

</div>
    
    
</>
    )
}

export default TodoList
