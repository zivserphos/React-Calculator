import React, { Component } from "react";

class ResultArea extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <input
        className="resultArea"
        onKeyPress={() => {
          const key = window.event.key;
          const isValid = key === "+" || key === "-" || !isNaN(key);
          isValid ? this.props.addSign(window.event.key) : console.log("false");
        }}
        value={this.props.exp}
      ></input>
    );
  }
}

// !isNaN(key) || key === "-" || key === "+"
// ? this.props.addSign(window.event.key)
// : "";

export default ResultArea;
