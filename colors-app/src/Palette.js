import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Palette.css";

export default function Palette(props) {
  const [level, setLevel] = useState(200);

  function handleSliderChange(newLevel) {
    setLevel(newLevel);
  }

  return (
    <div className="Palette">
      <div className="slider">
        <Slider
          defaultValue={level}
          step={100}
          min={100}
          max={900}
          onAfterChange={handleSliderChange}
        />
      </div>

      <div className="Palette-colors">
        {props.colors[level].map((color) => (
          <ColorBox {...color} />
        ))}
      </div>
    </div>
  );
}
