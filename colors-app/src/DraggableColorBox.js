import React from "react";
import { withStyles } from "@material-ui/styles";
const styles = {
  root: {
    width: "20%",
    height: "26%",
    backgroundColor: (props) => props.color,
    margin: "0 auto",
    position: "relative",
    marginBottom: "-4px",
    display: "inline-block",
  },
};
function DraggableColorBox(props) {
  const { classes } = props;

  return <div className={classes.root}>{props.name}</div>;
}

export default withStyles(styles)(DraggableColorBox);
