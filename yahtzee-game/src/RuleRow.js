import React, { Component } from "react";
import "./RuleRow.css";

class RuleRow extends Component {
  render() {
    const noScore = this.props.score === undefined;
    return (
      <tr
        className={`RuleRow RuleRow-${noScore ? "active" : "disabled"}`}
        onClick={noScore ? this.props.doScore : null}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">
          {noScore ? this.props.description : this.props.score}
        </td>
      </tr>
    );
  }
}

export default RuleRow;
