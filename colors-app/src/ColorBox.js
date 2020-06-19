import React, { useState } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/styles";

const styles = {
  ColorBox: {
    /* display: inline-block; */
    width: "20%",
    height: (props) => (props.showMore ? "25%" : "50%"),
    margin: "0 auto",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    "&:hover button": {
      opacity: "1",
      transition: "0.5s",
    },
  },
  copyText: {
    color: (props) =>
      chroma(props.color).luminance() >= 0.6 ? "black" : "white",
  },
  colorName: {
    color: (props) =>
      chroma(props.color).luminance() <= 0.09 ? "white" : "black",
  },
  seeMore: {
    color: (props) =>
      chroma(props.color).luminance() >= 0.6 ? "black" : "white",
    position: "absolute",
    bottom: "0%",
    right: "0%",
    padding: "10px",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "12px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    textAlign: "center",
    width: "40px",
    height: "10px",
    lineHeight: "10px",
  },
  copyButton: {
    position: "absolute",
    color: (props) =>
      chroma(props.color).luminance() >= 0.6 ? "black" : "white",
    top: "50%",
    left: "50%",
    width: "100px",
    height: "30px",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "20px",
    border: "none",
    cursor: "pointer",
    opacity: "0",
  },
};

function ColorBox(props) {
  const { name, color, paletteId, colorId, showMore, classes } = props;
  const [copied, setCopied] = useState(false);

  function changeCopyState() {
    setCopied(true);
    setTimeout(() => setCopied(false), 3500);
  }

  return (
    <div className={classes.ColorBox} style={{ background: color }}>
      <div
        className={`copy-overlay ${copied ? "show" : ""}`}
        style={{ background: color }}
      />
      <div className={`copy-msg ${copied ? "show" : ""}  ${classes.copyText}`}>
        <h1>COPIED!</h1>
        <p>{color}</p>
      </div>

      <div className="copy-container">
        <div className="box-content">
          <span className={classes.colorName}>{name}</span>
        </div>
        <CopyToClipboard text={color} onCopy={changeCopyState}>
          <button className={classes.copyButton}>COPY</button>
        </CopyToClipboard>
      </div>

      {showMore && (
        <Link to={`/palette/${paletteId}/${colorId}`}>
          <span className={classes.seeMore}>MORE</span>
        </Link>
      )}
    </div>
  );
}

export default withStyles(styles)(ColorBox);
