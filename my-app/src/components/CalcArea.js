import React from "react";
import { Button } from "./Button";
import numbersToWords from "number-to-words";

const signs = [
  "9",
  "8",
  "7",
  "DEL",
  "AC",
  "4",
  "5",
  "6",
  "X",
  "/",
  "1",
  "2",
  "3",
  "+",
  "-",
  "0",
  ".",
  "=",
];

function signToId(sign) {
  if (sign === "X") return "multiply";
  if (sign === "+") return "add";
  if (sign === "-") return "subtract";
  if (sign === "/") return "divide";
  if (sign === ".") return "decimal";
  if (sign === "AC") return "clear";
  if (sign === "DEL") return "del";
  if (sign === "=") return "equals";
}

export function CalcArea({ addSign }) {
  return (
    <div className="calc-area">
      {signs.map((sign) => {
        return (
          <Button
            key={sign}
            id={!isNaN(sign) ? numbersToWords.toWords(sign) : signToId(sign)}
            addSign={addSign}
            sign={sign}
          />
        );
      })}
    </div>
  );
}
