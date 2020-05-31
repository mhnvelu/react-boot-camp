import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
export default function Todo({ id, task, completed, removeTodo, toggleTodo }) {
  return (
    <div>
      <ListItem>
        <Checkbox
          color="primary"
          checked={completed}
          onClick={() => toggleTodo(id)}
        />
        <ListItemText
          style={{ textDecoration: completed ? "line-through" : "none" }}>
          {task}
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton aria-label="Edit">
            <Edit />
          </IconButton>
          <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
            <Delete />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  );
}
