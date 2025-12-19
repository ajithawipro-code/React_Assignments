import React from "react"
import { useState } from "react"

import TodoList from "./TodoList"

function Parent(){

    const [showTodos,setShowTodos]=useState(true)

   function ShowTodos(){

    setShowTodos(prev=>!prev)

   }

    return (

        <div>
            <h2>Show Todos - Hide Todos</h2>
            <button onClick={ShowTodos}>Show/Hide</button>
            {
                showTodos && <TodoList />
            }
        </div>
    )
}

export default Parent