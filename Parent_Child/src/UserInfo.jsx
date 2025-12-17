import React from 'react'

const UserInfo = (props) => {


  return ( 
   
     
    <div>  
          <h3>User Info</h3>  
     <p>Name : {props.name}</p>
     <p>Age : {props.age}</p>
     
    </div>

  
  )
}

export default UserInfo
