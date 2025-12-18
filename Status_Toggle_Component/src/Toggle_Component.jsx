import react from "react"
import { useState } from "react"
import { ComponentA } from "./ComponentA"
import { ComponentB } from "./ComponentB"

function Toggle_Component(){

    const [status,setStatus]=useState(false)

    function Toggle(){

        return setStatus(prev=>!prev)      
        
        
    }

    return (
     <div>
        <h2>Welcome to Status Toggle Component</h2>
        <button onClick={Toggle}>Toggle</button>
        <div>
            {
                status ? <ComponentA/> : <ComponentB />
            }
        </div>
     </div>
    )
}

export default Toggle_Component