import react from "react"
import { useState } from "react"

function Conditional_Styling(){

    const[colour,setColour]=useState(true)

    function Toggle(){

        setColour(prev=>!prev)
    }


    return (
     <>
        <h2>Welcome to Conditional Styling</h2>
        <button onClick={Toggle}>Toggle-Color</button>
        <div style={{color: colour ? "red" : "blue"}}><br></br>
            This is the text
        </div>
        
     

     </>
    )
}

export default Conditional_Styling