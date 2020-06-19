import React, { useRef, useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
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
  goBack: {
    backgroundColor: "black",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
    height: "50%",
    margin: "0 auto",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    opacity: "1",
  },
  backButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100px",
    height: "30px",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "20px",
    color: "white",
    border: "none",
    cursor: "pointer",
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
