import React from 'react'
import { TodoContext }from '../context/TodoContext'
import { useState, useContext } from 'react';
import { useRef } from 'react';

const AddTodo = () => {

const [text,setText] = useState("");
const inputRef=useRef(null);

const { addTodos } = useContext(TodoContext);

const handleTodo=()=>{
    inputRef.current.focus();
    addTodos(text)
    setText("")

}
  return (
    <div>
        <input type="text" placeholder='Enter todo here' value={text} onChange={(e)=>setText(e.target.value)} ref={inputRef} />

          <button onClick={handleTodo}>Add_Todo</button>

    </div>
  )
}

export default AddTodo
