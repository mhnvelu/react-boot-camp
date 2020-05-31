import { useState, useEffect } from "react";

export default function useLocalStorageState(key, initialValue) {
  const [state, setState] = useState(
    JSON.parse(window.localStorage.getItem(key) || String(initialValue))
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}
