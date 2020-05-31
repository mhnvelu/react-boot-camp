import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
export default function TodoList(props) {
  return (
    <Paper>
      <List>
        {props.todos.map((todo, i) => (
          <>
            <Todo
              id={todo.id}
              task={todo.task}
              key={todo.id}
              completed={todo.completed}
              removeTodo={props.removeTodo}
              toggleTodo={props.toggleTodo}
              editTodo={props.editTodo}
            />
            {i < props.todos.length - 1 && <Divider />}
          </>
        ))}
      </List>
    </Paper>
  );
}
