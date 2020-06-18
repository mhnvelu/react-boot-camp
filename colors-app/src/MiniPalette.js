import React from "react";
import { withStyles } from "@material-ui/styles";

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
    backgroundColor: "#dae1e4",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden",
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
  minibox: {
    width: "20%",
    height: "25%",
  },
};

function MiniPalette(props) {
  const { classes, id, paletteName, emoji, colors } = props;

  const handleClick = () => {
    props.history.push(`/palette/${id}`);
  };

  const miniColorBoxes = colors.map((color) => {
    return (
      <div
        key={color.name}
        className={classes.minibox}
        style={{ backgroundColor: color.color }}></div>
    );
  });

  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <i className={`em em-flag-${emoji}`}></i>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
