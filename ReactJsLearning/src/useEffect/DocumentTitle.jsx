import { useState, useEffect } from "react";

const DocumentTitle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // runs only when count changes

  return (
    <div style={{ padding: "20px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
};

export default DocumentTitle;
