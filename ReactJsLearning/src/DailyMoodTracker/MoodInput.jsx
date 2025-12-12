// import { useState } from "react"

export const MoodInput=()=>{


return (
     <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="How do you feel today?"
        style={{ padding: "8px", width: "70%" }}
      />
      <button style={{ padding: "8px", marginLeft: "10px" }} >Add Mood</button>
    </div>
)
}
