import React from "react";
import { withStyles } from "@material-ui/styles";
import { grey } from "@material-ui/core/colors";

const styles = {
  main: {
    backgroundColor: "purple",
    border: "3px solid teal",
  },
  secondary: {
    backgroundColor: "grey",
    "& h3": {
      color: "green",
      "& span": {
        color: "red",
      },
    },
  },
};

function MiniPalette(props) {
  const { classes } = props;
  return (
    <>
      <div className={classes.main}>
        <h1>MiniPalette</h1>
      </div>
      <div className={classes.secondary}>
        <h3>
          Secondary <span>section</span>{" "}
        </h3>
      </div>
    </>
  );
}

export default withStyles(styles)(MiniPalette);
