import React, { useState } from "react";

export default function SimpleFormHook() {
  const [email, setEmail] = useState("");
  return (
    <div>
      <h1 style={{ textDecoration: "underline" }}>
        Implemented with function Component
      </h1>
      <h1>You entered : {email}</h1>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={() => setEmail("")}>Submit</button>
    </div>
  );
}
