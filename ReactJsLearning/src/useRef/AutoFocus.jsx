import { useEffect, useRef } from "react";

function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>useRef Example</h1>
      <input ref={inputRef} type="text" placeholder="Type here..." />
    </div>
  );
}

export default App;
