import React from "react";
import useInputState from "./useInputState";
export default function SimpleFormCustomHook() {
  const [email, setEmail, reset] = useInputState("");

  return (
    <div>
      <h1 style={{ textDecoration: "underline" }}>
        Implemented with function Component and custom hook - useInputState
      </h1>
      <h4>You entered : {email}</h4>
      <input type="text" value={email} onChange={setEmail} />
      <button onClick={reset}>Submit</button>
    </div>
  );
}
