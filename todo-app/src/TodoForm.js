import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
export default function TodoForm(props) {
  const [value, handleChange, reset] = useInputState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(value);
    reset();
  };

  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Add New Todo"
          size="small"
          value={value}
          onChange={handleChange}
          margin="normal"
          fullWidth
        />
      </form>
    </Paper>
  );
}
