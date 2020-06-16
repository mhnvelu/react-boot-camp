import React from "react";
import "./ColorBox.css";
export default function ColorBox(props) {
  return (
    <div className="ColorBox" style={{ background: props.color }}>
      <span>{props.name}</span>
    </div>
  );
}
