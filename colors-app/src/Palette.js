import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";

export default function Palette(props) {
  const [level, setLevel] = useState(200);

  function handleSliderChange(newLevel) {
    setLevel(newLevel);
  }

  return (
    <div className="Palette">
      <Navbar level={level} handleLevelChange={handleSliderChange} />
      <div className="Palette-colors">
        {props.colors[level].map((color) => (
          <ColorBox {...color} />
        ))}
      </div>
    </div>
  );
}
