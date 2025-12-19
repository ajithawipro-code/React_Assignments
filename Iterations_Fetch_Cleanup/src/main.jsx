import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// import { useState } from "react"
// import TodoList from "./TodoList"

// function Parent(){

//     const[showTodos,setShowTodos]=useState(true)
    
//     function ShowTodos(){
//         setShowTodos(prev=>!prev)
//     }

     
//     return(

//         <div>
            
//             <h2>Show ToDo / Hide ToDO</h2>
//             <button onClick={ShowTodos}>Show/Hide</button>
//             {
//                 showTodos && <TodoList />
//             }

//         </div>
//     )
// }

// export default Parent





// import React from 'react'

// import { useState, useEffect} from "react"

// import TodoCard  from './TodoCard'


// const TodoList = () => {

//     const[todos,setTodos]=useState([]);


//     useEffect(()=>{

//         fetch("https://jsonplaceholder.typicode.com/todos")
//         .then(response=>response.json())
//         .then(data=> {
//             setTodos(data.slice(0,15))
//         });

//         return()=>{
//             alert("cleanup worked");
//         }

//     },[])

//   return (
// <>
    

//         <h2>Todo List</h2>

//          {
//             todos.map(todo=>(

//                 <TodoCard key={todo.id} userId={todo.userId} title={todo.title} completed={todo.completed}/>
//             ))
//          }

        
    

//     </>
//   )
// }

// export default TodoList

// function TodoCard({userId, title, completed}){

        

//     return (
//         <div>
//        <p>UserId: {userId}</p>
//         <p>Title: {title}</p>
//          <p>Completed: {completed ? "Yes" : "No"}</p>


//         </div>
//     )
// }

// export default TodoCard
