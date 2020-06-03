import React, { useState } from "react";

export default function CounterHook() {
  const [state, setState] = useState(0);
  return (
    <div>
      <h1 style={{ textDecoration: "underline" }}>
        Implemented with functional component and useState hook
      </h1>
      <h4>The Hook count is : {state}</h4>
      <button onClick={() => setState(state + 1)}>Count</button>
    </div>
  );
}
