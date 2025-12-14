import { useState } from "react"
import "./login.css"
export const LoginForm =()=>{
    const [user,setUser]=useState({
        username:"",
        password:"",
    })
    const handleOnChange=(e)=>{
        const{name,value}=e.target;
        setUser((prev)=> ({...prev,[name]:value}))
    }
    
    const handleClick=(e)=>{
     e.preventDefault();
    console.log(user)
    }

    return(
    <div id="container">
      <h1 id="heading" >
        Login Form
      </h1>
      <label htmlFor="text">Username</label>
      <input type="text" name="username" id="usernameInput" value={user.username} onChange={handleOnChange}/>
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="userPassword" value={user.password} onChange={handleOnChange}/>
      <button type="submit" id="btn-login" onClick={handleClick}>Login</button>
    </div>
    )
}