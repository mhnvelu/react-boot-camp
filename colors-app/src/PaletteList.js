import React from "react";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteListStyles";
import { Link } from "react-router-dom";

function PaletteList(props) {
  const { palettes, deletePalette, classes, routeProps } = props;
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1 className={classes.heading}>React Colors</h1>
          <Link to="/create-palette">Create Palette</Link>
        </nav>
        <div className={classes.palettes}>
          {palettes.map((palette) => (
            <MiniPalette
              key={palette.id}
              {...palette}
              {...routeProps}
              deletePalette={deletePalette}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(PaletteList);
