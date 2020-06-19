import React, { useState } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
export default function ColorBox(props) {
  const { name, color, paletteId, colorId, showMore } = props;
  const [copied, setCopied] = useState(false);

  function changeCopyState() {
    setCopied(true);
    setTimeout(() => setCopied(false), 3500);
  }

  const isDarkColor = chroma(color).luminance() <= 0.09;
  const isLightColor = chroma(color).luminance() >= 0.6;
  return (
    <div className="ColorBox" style={{ background: color }}>
      <div
        className={`copy-overlay ${copied ? "show" : ""}`}
        style={{ background: color }}
      />
      <div
        className={`copy-msg ${copied ? "show" : ""}  ${
          isLightColor && " dark-text"
        }`}>
        <h1>COPIED!</h1>
        <p>{color}</p>
      </div>

      <div className="copy-container">
        <div className="box-content">
          <span className={isDarkColor && "light-text"}>{name}</span>
        </div>
        <CopyToClipboard text={color} onCopy={changeCopyState}>
          <button className={`copy-button ${isLightColor && "dark-text"}`}>
            COPY
          </button>
        </CopyToClipboard>
      </div>

      {showMore && (
        <Link to={`/palette/${paletteId}/${colorId}`}>
          <span className={`see-more ${isLightColor && "dark-text"}`}>
            MORE
          </span>
        </Link>
      )}
    </div>
  );
}
