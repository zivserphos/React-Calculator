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
        {signs.map((sign) => {
          return (
            <Button
              key={sign}
              id={!isNaN(sign) ? numbersToWords.toWords(sign) : sign}
              addSign={this.props.addSign}
              sign={sign}
            />
          );
        })}
      </div>
    );
  }
}

export default CalcArea;
