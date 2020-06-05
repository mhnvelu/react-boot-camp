import React, { Component } from "react";
import Coin from "./Coin";
export default class CoinFlip extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.handleClick = this.handleClick.bind(this);
  //   }

  static defaultProps = {
    coinFaces: [
      { side: "head", imageUrl: "https://tinyurl.com/react-coin-heads-jpg" },
      { side: "tail", imageUrl: "https://tinyurl.com/react-coin-tails-jpg" },
    ],
  };

  state = {
    flipCount: 0,
    headCount: 0,
    tailCount: 0,
    coinFace: null,
  };

  //Warning: this is *experimental* syntax. It works only for arrow function.
  handleClick = () => {
    this.flipCoin();
  };

  flipCoin() {
    let side = Math.floor(Math.random() * 2);
    let currentFace = this.props.coinFaces[side];
    this.setState((state) => {
      let newState = {
        coinFace: currentFace,
        flipCount: state.flipCount + 1,
        headCount: state.headCount + (currentFace.side === "head" ? 1 : 0),
        tailCount: state.tailCount + (currentFace.side === "tail" ? 1 : 0),
      };
      return newState;
    });
  }

  //This requires binding the constructor
  /*
  handleClick() {
  this.flipCoin();
  }
*/

  render() {
    return (
      <div>
        <h1>Lets flip a coin!</h1>

        {this.state.flipCount > 0 && (
          <Coin
            url={this.state.coinFace.imageUrl}
            side={this.state.coinFace.side}
          />
        )}

        <button onClick={this.handleClick} style={{ marginTop: "1rem" }}>
          FLIP HERE
        </button>
        <p>
          Out of {this.state.flipCount} flips, there have been{" "}
          {this.state.headCount} heads and {this.state.tailCount} tails
        </p>
      </div>
    );
  }
}
