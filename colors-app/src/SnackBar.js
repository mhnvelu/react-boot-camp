import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
export default function SnackBar(props) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      open={props.open}
      autoHideDuration={3000}
      message={
        <span id="message-id">
          Format Changed To {props.value.toUpperCase()}
        </span>
      }
      onClose={props.handleSnackbarClose}
      ContentProps={{
        "aria-describedby": "message-id",
      }}
      action={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={props.handleSnackbarClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    />
  );
}
