import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
export default function TodoApp() {
  const initialTodos = [
    { id: 1, task: "Cook", completed: true },
    { id: 2, task: "Clean", completed: true },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newItem) => {
    setTodos([...todos, { id: 2, task: newItem, completed: true }]);
  };

  return (
    <div>
      <Paper
        elevation={3}
        style={{
          padding: 0,
          margin: 0,
          height: "100vh",
          backgroundColor: "#fafafa",
        }}>
        <AppBar position="static" color="primary" style={{ height: "64px" }}>
          <Toolbar>
            <Typography color="inherit">TODOs WITH HOOKS</Typography>
          </Toolbar>
        </AppBar>
        <Grid container justify="center" style={{ marginTop: "1rem" }}>
          <Grid item xs={11} md={8} lg={4}>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
