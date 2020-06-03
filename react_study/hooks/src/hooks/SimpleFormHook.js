import React, { useState } from "react";

export default function SimpleFormHook() {
  const [email, setEmail] = useState("");
  return (
    <div>
      <h1 style={{ textDecoration: "underline" }}>
        Implemented with function Component and useState
      </h1>
      <h4>You entered : {email}</h4>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={() => setEmail("")}>Submit</button>
    </div>
  );
}
