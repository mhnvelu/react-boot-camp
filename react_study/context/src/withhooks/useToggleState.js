// custom hook
import { useState } from "react";

export default function useToggleState(initialValue = false) {
  const [state, setState] = useState(initialValue);
  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
}
