import React, { useRef, useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import SnackBar from "./SnackBar";
import Footer from "./Footer";
import { withStyles } from "@material-ui/styles";

const styles = {
  goBack: {
    backgroundColor: "black",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ColorBox: {
    /* display: inline-block; */
    width: "20%",
    height: "50%",
    margin: "0 auto",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    "&:hover button": {
      opacity: "1",
      transition: "0.5s",
    },
  },
};

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
    <div className="SingleColorPalette Palette">
      <Navbar
        format={format.value}
        handleFormatChange={handleFormatChange}
        showingAllColors={false}
      />
      <div className="Palette-colors">
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
        <div className={`${classes.ColorBox} ${classes.goBack}`}>
          <button className="back-button" onClick={handleGoBack}>
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
