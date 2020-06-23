import React from "react";
import { withStyles } from "@material-ui/styles";
import { Emoji } from "emoji-mart";
import styles from "./styles/FooterStyles";
function Footer(props) {
  const { classes, paletteName, emoji } = props;
  return (
    <footer className={classes.PaletteFooter}>
      {paletteName}
      <Emoji emoji={{ id: emoji, skin: 3 }} size={32} />
    </footer>
  );
}

export default withStyles(styles)(Footer);
