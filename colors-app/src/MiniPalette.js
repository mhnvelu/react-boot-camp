import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { Emoji } from "emoji-mart";
import styles from "./styles/MiniPaletteStyles";
function MiniPalette(props) {
  const { classes, id, paletteName, emoji, colors, openDialog } = props;

  const handleClick = () => {
    props.history.push(`/palette/${id}`);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    openDialog(id);
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
      <DeleteIcon
        className={classes.deleteIcon}
        onClick={handleDelete}
        style={{ transition: "all 0.5s ease-in-out" }}
      />
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <Emoji emoji={{ id: emoji, skin: 3 }} size={32} />
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
