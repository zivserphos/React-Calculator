import React, { Component } from "react";
import ResultArea from "../ResultArea";
import CalcArea from "../CalcArea";

class Calculator extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      exp: "",
    };
  }
  addSignToExp = (sign) => {
    console.log(sign);
    const newExp = this.state.exp.concat(sign);
    this.setState({
      exp: newExp,
    });
  };
  render() {
    return (
      <div className="calculator">
        <ResultArea addSign={this.addSignToExp} exp={this.state.exp} />
        <CalcArea addSign={this.addSignToExp} />
      </div>
    );
  }
}

export default Calculator;
