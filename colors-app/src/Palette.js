import React from "react";
import "./Palette.css";
import ColorBox from "./ColorBox";

export default function Palette(props) {
  return (
    <div className="Palette">
      <div className="Palette-colors">
        {props.colors.map((color) => (
          <ColorBox {...color} />
        ))}
      </div>
    </div>
  );
}
