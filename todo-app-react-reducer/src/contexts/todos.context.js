import React, { createContext, useReducer } from "react";
import reducer from "../reducers/todos.reducers";
export const TodosContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(reducer, []);

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  );
}
