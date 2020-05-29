import React, { useState } from "react";

export default function Toggler() {
  const [happy, isHappy] = useState(true);
  const [workdone, setWorkdone] = useState(true);
  function toggleHappy() {
    isHappy(!happy);
  }

  const toggleWorkDone = () => setWorkdone(!workdone);

  return (
    <div>
      <h1 onClick={toggleHappy}>{happy ? "Happy!!" : "Sad"}</h1>
      <h1 onClick={toggleWorkDone}>
        {workdone ? "Work Done!!" : "Work Pending"}
      </h1>
    </div>
  );
}
