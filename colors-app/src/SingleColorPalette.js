import React, { useRef } from "react";
import ColorBox from "./ColorBox";

export default function SingleColorPalette(props) {
  const { colors, colorId } = props;

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
      <h1>Single color palette</h1>
      <div className="Palette-colors">
        {ref.current.map((color) => (
          <ColorBox
            paletteId={props.id}
            colorId={colorId}
            key={color.id}
            name={color.name}
            color={color.hex}
            showMore={false}
          />
        ))}
      </div>
    </div>
  );
}
