import React from "react"
import './TodoCard.css'

function TodoCard({userid,title,completed}){

    return (

        <div className="todocard">
            <h2>Todo Card</h2>
            <p>User ID: {userid}</p>
               <p>Title: {title}</p>
                  <p>Completed:{ completed ? "Yes" : "No" }</p>
        </div>
    )

}

export default TodoCard