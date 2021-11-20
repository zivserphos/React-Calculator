import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <button
        className="button"
        onClick={() => this.props.addSign(this.props.sign)}
      >
        {this.props.sign}
      </button>
    );
  }
}

export default Button;
