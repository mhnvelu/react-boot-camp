import React from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
export default function ColorBox(props) {
  const { name, color } = props;
  return (
    <div className="ColorBox" style={{ background: color }}>
      <div className="copy-container">
        <div className="box-content">
          <span>{name}</span>
        </div>
        <CopyToClipboard text={color}>
          <button className="copy-button">Copy</button>
        </CopyToClipboard>
      </div>
      <span className="see-more">MORE</span>
    </div>
  );
}
