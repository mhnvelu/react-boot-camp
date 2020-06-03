import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.amount };

    case "DECREMENT":
      return { count: state.count - action.amount };

    case "RESET":
      return { count: 0 };

    default:
      break;
  }
};

export default function ReducerHook() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <h1 style={{ textDecoration: "underline" }}>
        Implemented with Reducer Hook
      </h1>
      <h3>{state.count}</h3>
      <button onClick={() => dispatch({ type: "INCREMENT", amount: 1 })}>
        ADD 1
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT", amount: 5 })}>
        ADD 5
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", amount: 1 })}>
        SUBTRACT 1
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
    </div>
  );
}
