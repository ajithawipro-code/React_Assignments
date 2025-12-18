import react, { useState, useEffect } from "react"

function UserData(){

    const[userdata,setUserData]=useState(null);

    const[load,setLoad]=useState(true);

    useEffect(()=>{
            
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response =>response.json())
        .then(data=>{
        setUserData(data);
        setLoad(false);
        })
       


    },[])

    return (
     <div>
        <h2>Welcome! UseEffect with Fetch Data Loading</h2>
        <div>
            {
                load===true ? "Loading..." :

                <div>
                <p>{userdata.name}</p> 
                  <p>  {userdata.email} </p>
                 <p>   {userdata.phone}</p>
                </div>
                    
                
                
            }
        </div>
     </div>
    )
}

export default UserData