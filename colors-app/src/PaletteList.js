import React from "react";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteListStyles";

function PaletteList(props) {
  const { palettes, classes, routeProps } = props;
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
        </nav>
        <div className={classes.palettes}>
          {palettes.map((palette) => (
            <MiniPalette {...palette} {...routeProps} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(PaletteList);
