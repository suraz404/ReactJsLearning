import "./ToggleSwitch.css"
import { useState } from "react";
export const ToggleSwitch =()=>{

    const [isOn,setOn]=useState(false);
    const handleToggleSwitch =()=>{
        setOn(!isOn);
         document.body.style.backgroundColor = !isOn ? "#121212" : "#ffffff";
    }
    return (
        <>
       
        <div className="toggle-switch " style ={{backgroundColor :isOn ? "#4caf50" : "" }} onClick={handleToggleSwitch}>
            <div className={`switch ${isOn ? "on" : "off"}`}>
                <span className="switch-state">{isOn ? "on" : "off"}</span>
            </div>
        </div>
            
        </>
    )
}