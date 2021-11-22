import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <button
        id={this.props.sign === "=" ? "equals" : this.props.id}
        className="button"
        onClick={() => this.props.addSign(this.props.sign)}
      >
        {this.props.sign}
      </button>
    );
  }
}

export default Button;
