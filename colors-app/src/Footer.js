import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/FooterStyles";
import { Emoji } from "emoji-mart";
function Footer(props) {
  return (
    <footer className={props.classes.PaletteFooter}>
      {props.paletteName}
      <Emoji emoji={{ id: props.emoji, skin: 3 }} size={32} />
    </footer>
  );
}

export default withStyles(styles)(Footer);
