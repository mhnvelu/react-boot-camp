import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import styles from "./styles/NavbarStyles";
import { withStyles } from "@material-ui/styles";
function Navbar(props) {
  const { classes } = props;
  return (
    <nav className={classes.Navbar}>
      <div className={classes.logo}>
        <Link to="/">reactcolorpicker</Link>
      </div>
      {props.showingAllColors && (
        <div>
          <span>Level: {props.level}</span>
          <div className={classes.slider}>
            <Slider
              defaultValue={props.level}
              step={100}
              min={100}
              max={900}
              onAfterChange={props.handleLevelChange}
            />
          </div>
        </div>
      )}
      <div className={classes.selectContainer}>
        <Select value={props.format} onChange={props.handleFormatChange}>
          <MenuItem value="hex">HEX - #fffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255,255,255,0.5)</MenuItem>
        </Select>
      </div>
    </nav>
  );
}

export default withStyles(styles)(Navbar);
