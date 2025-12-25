import { useState, useCallback, memo } from "react";

const Button = memo(({ onClick }) => {
  console.log("Button rendered");
  return <button onClick={onClick}>Click Me</button>;
});

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    alert("Button clicked!");
  }, []);

  return (
    <>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <Button onClick={handleClick} />
    </>
  );
}
