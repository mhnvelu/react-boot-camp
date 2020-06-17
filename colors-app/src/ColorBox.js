import React, { useState } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
export default function ColorBox(props) {
  const { name, id, hex, rgb, rgba } = props;
  const [copied, setCopied] = useState(false);

  function changeCopyState() {
    setCopied(true);
    setTimeout(() => setCopied(false), 3500);
  }

  return (
    <div className="ColorBox" style={{ background: hex }}>
      <div
        className={`copy-overlay ${copied ? "show" : ""}`}
        style={{ background: hex }}
      />
      <div className={`copy-msg ${copied ? "show" : ""}`}>
        <h1>COPIED!</h1>
        <p>{hex}</p>
      </div>

      <div className="copy-container">
        <div className="box-content">
          <span>{name}</span>
        </div>
        <CopyToClipboard text={hex} onCopy={changeCopyState}>
          <button className="copy-button">Copy</button>
        </CopyToClipboard>
      </div>
      <span className="see-more">MORE</span>
    </div>
  );
}
