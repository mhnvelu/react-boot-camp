import React from "react";
import "./Palette.css";
import { withStyles } from "@material-ui/styles";

const styles = {
  PaletteFooter: {
    backgroundColor: "white",
    height: "5vh",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontWeight: "bold",
  },
  emoji: {
    fontSize: "1rem",
    margin: "0 1rem",
  },
};
function Footer(props) {
  return (
    <footer className={props.classes.PaletteFooter}>
      {props.paletteName}{" "}
      <i className={`${props.classes.emoji} em ${props.emoji}`}></i>
    </footer>
  );
}

export default withStyles(styles)(Footer);
