import React, { useRef, useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import SnackBar from "./SnackBar";
import Footer from "./Footer";
export default function SingleColorPalette(props) {
  const { colors, colorId } = props;
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
      console.log(color[0]);
      colorShades.push(color[0]);
    }
    console.log(colorShades.slice(1));

    return colorShades.slice(1);
  };

  const ref = useRef(gatherShades());

  return (
    <div className="Palette">
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
            key={color.id}
            name={color.name}
            color={color[format.value]}
            showMore={false}
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
