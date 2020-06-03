import React, { useState, useEffect } from "react";

export default function Clicker() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <h1 style={{ textDecoration: "underline" }}>
        Implemented with functional component and useState, useEffect
      </h1>
      <button onClick={() => setCount(count + 1)}>Click Me {count}</button>
    </div>
  );
}
