import React from "react"
import TodoProvider from "./context/TodoContext"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
import TodoItem from "./components/TodoItem"
function App(){

    return (
        <div>
       <TodoProvider>
        <AddTodo />
         <TodoList />
         <TodoItem />
       </TodoProvider>
        </div>
    )
}

export default App