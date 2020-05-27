import React from "react";
import axios from "axios";
class ZenQuote extends React.Component {
  // Called only once.
  constructor(props) {
    super(props);
    this.state = { quote: "" };
    console.log("IN CONSTRUCTOR");
  }

  // called only once after render
  componentDidMount() {
    console.log("IN COMPONENT DID MOUNT");
    axios.get("https://api.github.com/zen").then((response) => {
      this.setState({ quote: response.data });
    });
  }

  // called many times whenever there is state change.
  render() {
    console.log("IN RENDER");
    return (
      <div>
        <h1>Always remember...</h1>
        <p>{this.state.quote}</p>
      </div>
    );
  }
}

export default ZenQuote;
