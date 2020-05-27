import React from "react";
import axios from "axios";
import "./ZenQuote.css";
class ZenQuote extends React.Component {
  // Called only once.
  constructor(props) {
    super(props);
    this.state = { quote: "", isLoaded: false };
    console.log("IN CONSTRUCTOR");
  }

  // called only once after render
  componentDidMount() {
    console.log("IN COMPONENT DID MOUNT");
    axios.get("https://api.github.com/zen").then((response) => {
      setTimeout(
        function () {
          this.setState({ quote: response.data, isLoaded: true });
        }.bind(this),
        3000
      );
    });
  }

  // called many times whenever there is state change.
  render() {
    console.log("IN RENDER");
    return (
      <div>
        {this.state.isLoaded ? (
          <div>
            <h1>Always remember...</h1>
            <p>{this.state.quote}</p>
          </div>
        ) : (
          <div className="loader"> </div>
        )}
      </div>
    );
  }
}

export default ZenQuote;
