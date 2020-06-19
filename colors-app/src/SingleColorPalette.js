import React, { useRef, useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import SnackBar from "./SnackBar";
import Footer from "./Footer";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteStyles";
function SingleColorPalette(props) {
  const { colors, colorId, routeProps, classes } = props;
  const [format, setFormat] = useState({ value: "hex", open: false });

  function handleFormatChange(e) {
    setFormat({ value: e.target.value, open: true });
  }

  function handleSnackbarClose() {
    setFormat({ ...format, open: false });
  }
  const gatherShades = () => {
    const colorShades = [];
    for (let level in colors) {
      let colorsAtLevel = colors[level];
      let color = colorsAtLevel.filter((color) => color.id === colorId);
      colorShades.push(color[0]);
    }
    return colorShades.slice(1);
  };

  const ref = useRef(gatherShades());

  const handleGoBack = () => {
    routeProps.history.goBack();
  };

  return (
    <div className={classes.Palette}>
      <Navbar
        format={format.value}
        handleFormatChange={handleFormatChange}
        showingAllColors={false}
      />
      <div className={classes.PaletteColors}>
        {ref.current.map((color) => (
          <ColorBox
            paletteId={props.id}
            colorId={colorId}
            key={color.name}
            name={color.name}
            color={color[format.value]}
            showMore={false}
          />
        ))}
        <div className={classes.goBack}>
          <button className={classes.backButton} onClick={handleGoBack}>
            Go Back
          </button>
        </div>
      </div>
      <SnackBar
        open={format.open}
        value={format.value}
        handleSnackbarClose={handleSnackbarClose}
      />

      <Footer paletteName={props.paletteName} emoji={props.emoji} />
    </div>
  );
}

export default withStyles(styles)(SingleColorPalette);
