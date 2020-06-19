import React from "react";
import "./Palette.css";
export default function Footer(props) {
  return (
    <footer className="Palette-footer">
      {props.paletteName} <i className={`emoji em ${props.emoji}`}></i>
    </footer>
  );
}
