import { useState } from "react"

export const ShortCircuitPractice =()=>{

    const [isLoggedIn,setLoggedIn]=useState("false")
 
    return (
        <div style={{
            height:"80vh",
            width:"80vw",
            backgroundColor:"#dfdcdcff",
            borderRadius:"10px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
            
            
            }}>
            <h1 style={{
                textAlign:"center",
                fontSize:"40px"
            }}>Short Circuit Evaluation Practice</h1>

            <div style={{
                height:"50vh",
                display:"flex",
                alignItems:"center"
            }}>
                <p>{isLoggedIn && "You are loggedin"}</p>
            </div>
            <div style={{

            }}>
                <button onClick={()=>setLoggedIn(!isLoggedIn)}>Toggle Login State </button>
                <button > Set User </button>
                <button> Clear User</button>
            </div>

        </div>
    )
  
}