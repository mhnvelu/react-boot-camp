import React from "react";
import { withStyles } from "@material-ui/styles";
import { grey } from "@material-ui/core/colors";

const styles = {
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer",
    },
  },
  colors: {
    backgroundColor: "grey",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative",
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem",
  },
};

function MiniPalette(props) {
  const { classes, id, paletteName, emoji, colors } = props;

  return (
    <div className={classes.root}>
      <div className={classes.colors}></div>
      <h5 className={classes.title}>
        {paletteName} <i className={`em em-flag-${emoji}`}></i>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
