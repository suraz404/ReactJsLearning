import React, { useReducer } from "react";

function reducer(state, action) {
  if (action === "INC") {
    return state + 1;
  }

  if (action === "DEC") {
    return state - 1;
  }

  return state;
}

export default function App() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => dispatch("INC")}>+</button>
      <button onClick={() => dispatch("DEC")}>-</button>
    </div>
  );
}
