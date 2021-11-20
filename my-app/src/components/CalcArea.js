import React, { Component } from "react";
import Button from "./Button";
import numbersToWords from "number-to-words";

const signs = [
  ".",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "/",
  "X",
  "AC",
  "=",
  "+",
  "-",
];

class CalcArea extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="calc-area">
        {signs.map((number) => {
          return (
            <Button
              key={number}
              id={!isNaN(number) ? numbersToWords.toWords(number) : number}
              addSign={this.props.addSign}
              sign={number}
            />
          );
        })}
      </div>
    );
  }
}

export default CalcArea;
