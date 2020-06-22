import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/MiniPaletteStyles";
import { Emoji } from "emoji-mart";
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
        {paletteName} <Emoji emoji={{ id: emoji, skin: 3 }} size={32} />
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
