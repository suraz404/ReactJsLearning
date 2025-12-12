
export const MoodItem=(props)=> {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "8px",
        marginBottom: "8px",
        borderRadius: "4px",
        display: "flex",       
        justifyContent: "space-between", 
        alignItems: "center",        
      }}
    >
      <span>{props.text}</span>
      <button>Delete</button>
    </div> 
  );
}

