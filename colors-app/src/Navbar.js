import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
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
      <div className="select-container">
        <Select value={props.format} onChange={props.handleFormatChange}>
          <MenuItem value="hex">HEX - #fffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255,255,255,0.5)</MenuItem>
        </Select>
      </div>
    </nav>
  );
}
