import React from 'react'
import { useState } from 'react';

function Counter(){

    const [count,setCount]=useState(0);

    function handleCounter(){

    setCount((count)=> count+1)
    
        console.log("Count is now", count);
        if(count%2==1)
        //console.log("prev value is now", prev-1);
        alert("Both in sync-- both places even numbers")
    }



  return (
    <div>
          <h2> This is Counter App</h2>
          <h3> The count now is : {count}</h3>
          <button onClick={handleCounter}>Increment</button>

    </div>
  )
}

export default Counter;
