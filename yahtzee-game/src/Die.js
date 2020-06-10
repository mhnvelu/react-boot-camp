import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords: ["one", "two", "three", "four", "five", "six"],
  };
  render() {
    const { numberWords, locked, val, disabled, rolling } = this.props;

    return (
      <i
        className={`Die fas fa-dice-${numberWords[val - 1]} fa-5x ${
          locked && "Die-locked"
        }  ${rolling && "Die-rolling"}`}
        onClick={() => this.props.handleClick(this.props.idx)}
        disabled={disabled}
      />
    );
  }
}

export default Die;
