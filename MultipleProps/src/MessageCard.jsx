import React from "react"
import './MessageCard.css'

const MessageCard = (props)=>{


    return(
<>
   
        <div className="card">
         
           <p>Title:{props.title}</p>
           <p>Message: {props.message}</p>
        </div>

        </>
    )

}

export default MessageCard