import React from "react";
import useToggle from "./useToggle";
export default function Toggler() {
  const [happy, toggleHappy] = useToggle(true);
  const [workdone, toggleWorkDone] = useToggle(true);

  //   function toggleHappy() {
  //     isHappy(!happy);
  //   }

  //   const toggleWorkDone = () => setWorkdone(!workdone);

  return (
    <div>
      <h1 style={{ textDecoration: "underline" }}>
        Implemented with Custom Toggle - useToggle hook
      </h1>
      <h3 onClick={toggleHappy}>{happy ? "Happy!!" : "Sad"}</h3>
      <h3 onClick={toggleWorkDone}>
        {workdone ? "Work Done!!" : "Work Pending"}
      </h3>
    </div>
  );
}
