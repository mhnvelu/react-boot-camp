import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";
export default function TodoList(props) {
  return (
    props.todos.length > 0 && (
      <Paper>
        <List>
          {props.todos.map((todo, i) => (
            // To add a key to a fragment, we have to use the long-hand version rather than
            // <> </>, we have to use <React.Fragment>
            <React.Fragment key={i}>
              <Todo
                key={todo.id}
                {...todo}
                removeTodo={props.removeTodo}
                toggleTodo={props.toggleTodo}
                editTodo={props.editTodo}
              />
              {i < props.todos.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    )
  );
}
