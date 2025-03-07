import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";
import { TodosContext } from "./contexts/todos.context";
export default function TodoList() {
  const { todos } = useContext(TodosContext);
  return (
    todos.length > 0 && (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            // To add a key to a fragment, we have to use the long-hand version rather than
            // <> </>, we have to use <React.Fragment>
            <React.Fragment key={i}>
              <Todo key={todo.id} {...todo} />
              {i < todos.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    )
  );
}
