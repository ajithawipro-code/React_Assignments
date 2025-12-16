import React from 'react'
import { useState } from 'react'


const UseState = () => {


    const [count,setCount]=useState(1000);

    const Reset=()=>{
       setCount(0)
    }
   

    const Increment=()=>{

         setCount((prev)=>{
         return prev + 1
    })
}
 const Decrement=()=>{

         setCount((prev)=>{
         return prev - 1
    })
}

  return (
    <div>
<h1> Counter using UseState </h1>

<p>{count}</p>
<button onClick={Increment}>Increment</button>
<button onClick={Decrement}>Decrement</button>
<button onClick={Reset}>Reset</button>

    </div>
  )
}


export default UseState