import React, { useState, lazy, Suspense } from "react";

const HeavyChild = lazy(() => import("./HeavyChild"));

function App() {
  const [count, setCount] = useState(0);
  console.log("Parent rendered");

  return (
    <div>
      <h1>React.memo & Lazy Loading Demo</h1>

      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <hr />

      <Suspense fallback={<div>Loading heavy component...</div>}>
        <HeavyChild />
      </Suspense>
    </div>
  );
}

export default App;
