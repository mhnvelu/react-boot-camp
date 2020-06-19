import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";
import SnackBar from "./SnackBar";
import Footer from "./Footer";
import { withStyles } from "@material-ui/styles";

const styles = {
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  PaletteColors: {
    height: "90%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
};

function Palette(props) {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState({ value: "hex", open: false });
  const { classes } = props;
  function handleSliderChange(newLevel) {
    setLevel(newLevel);
  }

  function handleFormatChange(e) {
    setFormat({ value: e.target.value, open: true });
  }

  function handleSnackbarClose() {
    setFormat({ ...format, open: false });
  }

  return (
    <div className={classes.Palette}>
      <Navbar
        level={level}
        format={format.value}
        handleLevelChange={handleSliderChange}
        handleFormatChange={handleFormatChange}
        showingAllColors
      />
      <div className={classes.PaletteColors}>
        {props.colors[level].map((color) => (
          <ColorBox
            paletteId={props.id}
            colorId={color.id}
            key={color.id}
            name={color.name}
            color={color[format.value]}
            showMore={true}
          />
        ))}
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

export default withStyles(styles)(Palette);
