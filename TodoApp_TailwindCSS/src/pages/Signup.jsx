import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const Signup=()=>{

    const { signup } = useContext(AuthContext);
    const [email,setEmail]=useState("");
    const [password,setPassword]= useState("");
    const navigate=useNavigate();

    const handleSubmit=(e)=>{

        e.preventDefault();

        const result=signup(email,password);
        if(result)
        {
             navigate("/login");   
        }
        else{
            return;
        }

    }



    return(

        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button type="submit">Signup</button>
            </form>
        </div>


    )


}

export default Signup;