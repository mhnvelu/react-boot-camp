import React from "react";
import { Link } from "react-router-dom";
export default function PaletteList(props) {
  const { palettes } = props;
  return (
    <div>
      <h1>React Colors</h1>
      {palettes.map((palette) => (
        <div>
          <h2>{palette.paletteName}</h2>
          <h3>{palette.emoji}</h3>
          <Link exact to={`/palette/${palette.id}`}>
            Click Here
          </Link>
        </div>
      ))}
    </div>
  );
}
