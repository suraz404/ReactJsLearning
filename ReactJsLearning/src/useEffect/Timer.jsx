import { useEffect, useState } from "react"

export const Timer =()=>{

    const [count,setCount]=useState(0)

    useEffect(()=>{
        const timer=setInterval(()=>{
            setCount(count+1)
        },1000)
        return ()=>{
            clearInterval(timer)
        }
    })
    return (
        <div style={{height:"100vh",width:"100vw",backgroundColor:"navy",display:"flex", justifyContent:"center",alignItems:"center"}}>

            <div>
             <h1>Timer</h1>
             <p>{count}</p>
            </div>
    

        </div>
    )
}