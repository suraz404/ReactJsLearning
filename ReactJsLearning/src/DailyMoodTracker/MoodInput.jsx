import { useState } from "react"

export const MoodInput=({onAddMood})=>{

  const [inputValue,setInputValue]=useState("")
  const handleInputValue =(e)=>{
    setInputValue(e.target.value)
  }
  const handleAddClick =()=>{
    onAddMood(inputValue);

    setInputValue( "")

  }

return (
     <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="How do you feel today?"
        style={{ padding: "8px", width: "70%" }}
        value={inputValue}
        onChange={handleInputValue}
      />
      <button style={{ padding: "8px", marginLeft: "10px" }} onClick={handleAddClick} >Add Mood</button>
    </div>
)
}
