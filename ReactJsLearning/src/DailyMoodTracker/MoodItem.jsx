
export const MoodItem=({id,onDelete,text})=> {
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
      <span>{text}</span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div> 
  );
}

