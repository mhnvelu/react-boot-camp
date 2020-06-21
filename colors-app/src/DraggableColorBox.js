import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
const styles = {
  root: {
    width: "20%",
    height: "26%",
    backgroundColor: (props) => props.color,
    margin: "0 auto",
    position: "relative",
    marginBottom: "-4px",
    display: "inline-block",
    cursor: "pointer",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.5)",
    },
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    bottom: "0%",
    left: "0%",
    padding: "10px",
    color: "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  deleteIcon: {
    transition: "all 0.3s ease-in-out",
  },
};
function DraggableColorBox(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.boxContent}>
        <span>{props.name}</span>
        <DeleteIcon className={classes.deleteIcon} />
      </div>
    </div>
  );
}

export default withStyles(styles)(DraggableColorBox);
