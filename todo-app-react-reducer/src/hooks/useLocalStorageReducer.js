import { useReducer, useEffect } from "react";

export default function useLocalStorageReducer(key, initialValue, reducer) {
  const [state, dispatch] = useReducer(reducer, initialValue, () => {
    return JSON.parse(window.localStorage.getItem(key) || String(initialValue));
  });

  // https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies
  useEffect(() => {
    function setTodos() {
      window.localStorage.setItem(key, JSON.stringify(state));
    }

    setTodos();
  }, [state, key]);

  // useEffect(() => {
  //   window.localStorage.setItem(key, JSON.stringify(state));
  // }, [state]);

  return [state, dispatch];
}
