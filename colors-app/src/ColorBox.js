import React, { useState } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
export default function ColorBox(props) {
  const { name, color } = props;
  const [copied, setCopied] = useState(false);

  function changeCopyState() {
    setCopied(true);
    setTimeout(() => setCopied(false), 3500);
  }

  return (
    <div className="ColorBox" style={{ background: color }}>
      <div
        className={`copy-overlay ${copied ? "show" : ""}`}
        style={{ background: color }}
      />
      <div className={`copy-msg ${copied ? "show" : ""}`}>
        <h1>COPIED!</h1>
        <p>{color}</p>
      </div>

      <div className="copy-container">
        <div className="box-content">
          <span>{name}</span>
        </div>
        <CopyToClipboard text={color} onCopy={changeCopyState}>
          <button className="copy-button">Copy</button>
        </CopyToClipboard>
      </div>
      <Link to="/">
        <span className="see-more">MORE</span>
      </Link>
    </div>
  );
}
