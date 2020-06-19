import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

export default function Palette(props) {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState({ value: "hex", open: false });

  function handleSliderChange(newLevel) {
    setLevel(newLevel);
  }

  function handleFormatChange(e) {
    setFormat({ value: e.target.value, open: true });
  }

  function handleSnackbarClose() {
    setFormat({ ...format, open: false });
  }

  return (
    <div className="Palette">
      <Navbar
        level={level}
        format={format.value}
        handleLevelChange={handleSliderChange}
        handleFormatChange={handleFormatChange}
      />
      <div className="Palette-colors">
        {props.colors[level].map((color) => (
          <ColorBox
            paletteId={props.id}
            colorId={color.id}
            key={color.id}
            name={color.name}
            color={color[format.value]}
            showMore={true}
          />
        ))}
      </div>

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={format.open}
        autoHideDuration={3000}
        message={
          <span id="message-id">
            Format Changed To {format.value.toUpperCase()}
          </span>
        }
        onClose={handleSnackbarClose}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleSnackbarClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />

      <footer className="Palette-footer">
        {props.paletteName}{" "}
        <i className={`emoji em em-flag-${props.emoji}`}></i>
      </footer>
    </div>
  );
}
