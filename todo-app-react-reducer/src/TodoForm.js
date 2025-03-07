import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./contexts/todos.context";
export default function TodoForm() {
  const [value, handleChange, reset] = useInputState("");
  const dispatch = useContext(DispatchContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD", task: value });
    reset();
  };
  console.log("TodoForm.....");
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
