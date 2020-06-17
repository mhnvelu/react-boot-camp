import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";
export default function Navbar(props) {
  return (
    <nav className="Navbar">
      <div className="logo">
        <a href="#">reactcolorpicker</a>
      </div>
      <div className="slider-container">
        <span>Level: {props.level}</span>
        <div className="slider">
          <Slider
            defaultValue={props.level}
            step={100}
            min={100}
            max={900}
            onAfterChange={props.handleLevelChange}
          />
        </div>
      </div>
    </nav>
  );
}
