import react, { useEffect } from "react"
import { useState } from "react";
import './Counter_useEffect.css'

function Counter_useEffect(){

  const [count,setCount]=useState(0);

 

  function increment(){

     setCount((prev)=> prev+1)

  }

  useEffect(()=>{
    if(count !==0 && count%3==0)
        alert("Number is divisible by 3")
  },[count]);

    return (
     <div className="counter">
        <h2>Welcome to Counter with UseEffect</h2>
        <p>Count is {count}</p>
        <button onClick={increment}>Increment</button>
     </div>
    )
}

export default Counter_useEffect