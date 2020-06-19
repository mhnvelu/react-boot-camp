import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/FooterStyles";
function Footer(props) {
  return (
    <footer className={props.classes.PaletteFooter}>
      {props.paletteName}{" "}
      <i className={`${props.classes.emoji} em ${props.emoji}`}></i>
    </footer>
  );
}

export default withStyles(styles)(Footer);
