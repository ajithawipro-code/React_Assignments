import React from 'react'
import MessageCard from './MessageCard'


const App = () => {

  return (

    <>

      
             <h1>Multiple Props Use</h1>
    <div className='container'>     
    <MessageCard title={"Title 1"} message={"Message 1"} />
      <MessageCard title={"Title 2"} message={"Message 2"} />
       <MessageCard title={"Title 3"} message={"Message 3"} />
        <MessageCard title={"Title 4"} message={"Message 4"} />
         <MessageCard title={"Title 5"} message={"Message 5"} />
          <MessageCard title={"Title 6"} message={"Message 6"} />
           <MessageCard title={"Title 7"} message={"Message 7"} />
            <MessageCard title={"Title 8"} message={"Message 8"} />
             <MessageCard title={"Title 9"} message={"Message 9"} />
    </div>
    </>
  )
}

export default App
