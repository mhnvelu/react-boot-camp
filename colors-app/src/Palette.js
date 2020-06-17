import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";

export default function Palette(props) {
  const [level, setLevel] = useState(200);
  const [format, setFormat] = useState("hex");

  function handleSliderChange(newLevel) {
    setLevel(newLevel);
  }

  function handleFormatChange(e) {
    setFormat(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div className="Palette">
      <Navbar
        level={level}
        format={format}
        handleLevelChange={handleSliderChange}
        handleFormatChange={handleFormatChange}
      />
      <div className="Palette-colors">
        {props.colors[level].map((color) => (
          <ColorBox name={color.name} color={color[format]} />
        ))}
      </div>
    </div>
  );
}
