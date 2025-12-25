import { useState, useMemo } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const result = useMemo(() => {
    console.log("Heavy calculation running...");
    let total = 0;
    for (let i = 0; i < 1_000_000_000; i++) {
      total += i;
    }
    return total + count;
  }, [count]);

  return (
    <>
      <h2>{result}</h2>
      <p>{text}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <input onChange={(e) => setText(e.target.value)} />
    </>
  );
}

export default UseMemo;
