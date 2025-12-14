import { useState } from "react";
import "./form.css"
export const ReactFormHandle =()=>{

    const [user,setUser]=useState({
       fullname:"",
       email:"",
       password:"",
       confirmpassword:"",

    })
    const handleOnChange =(e)=>{
        const {name,value}=e.target;
        setUser((prev)=>({...prev,[name]:value}));
    }
    const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(user)
    }


  
        return (
<div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
<div style={{ width: 360, border: "1px solid #ddd", borderRadius: 8, padding: 16 }}>
<h2 style={{ textAlign: "center", marginBottom: 16 }}>Create Account</h2>


<form>
<div style={{ marginBottom: 12 }}>
<label>Full Name</label>
<input name="fullname" type="text" placeholder="Your name" value={user.fullname} onChange={handleOnChange}style={{ width: "100%" }} />
</div>


<div style={{ marginBottom: 12 }}>
<label>Email</label>
<input name="email" type="email" placeholder="you@example.com" value={user.email} onChange={handleOnChange}style={{ width: "100%" }} />
</div>


<div style={{ marginBottom: 12 }}>
<label>Password</label>
<input name="password" type="password" placeholder="Create password" value={user.password} onChange={handleOnChange}style={{ width: "100%" }} />
</div>


<div style={{ marginBottom: 16 }}>
<label>Confirm Password</label>
<input name= "confirmpassword" type="password" placeholder="Confirm password" value={user.confirmpassword} onChange={handleOnChange}style={{ width: "100%" }} />
</div>


<button type="submit" onClick={handleSubmit} style={{ width: "100%" }}>
Sign Up
</button>
</form>
</div>
</div>
);
    
}