import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import styles from "./styles/ColorBoxStyles";
import { withStyles } from "@material-ui/styles";

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
        className={`${classes.copyOverlay} ${
          copied ? classes.showOverlay : ""
        }`}
        style={{ background: color }}
      />
      <div
        className={`${classes.copyMsg} ${copied ? classes.showCopyMsg : ""}  ${
          classes.copyText
        }`}>
        <h1>COPIED!</h1>
        <p>{color}</p>
      </div>

      <div className={classes.boxContent}>
        <span className={classes.colorName}>{name}</span>
      </div>
      <CopyToClipboard text={color} onCopy={changeCopyState}>
        <button className={classes.copyButton}>COPY</button>
      </CopyToClipboard>

      {showMore && (
        <Link to={`/palette/${paletteId}/${colorId}`}>
          <span className={classes.seeMore}>MORE</span>
        </Link>
      )}
    </div>
  );
}

export default withStyles(styles)(ColorBox);
