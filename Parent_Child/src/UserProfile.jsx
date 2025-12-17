import React from "react"
import UserInfo from "./UserInfo"

function UserProfile(){

    return (

        <div>
          <UserInfo name={"Alice"} age={30}/>
          <UserInfo name={"Bob"} age={28}/>
          <UserInfo name={"Charles"} age={34}/>
          <UserInfo name={"David"} age={23}/>
         
        </div>
    )
}

export default UserProfile