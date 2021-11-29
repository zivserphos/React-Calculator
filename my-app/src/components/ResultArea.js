import React from "react";

export function ResultArea({ exp, addSign }) {
  return (
    <input
      id="display"
      className="resultArea"
      onKeyPress={() => {
        const key = window.event.key;
        const isValid = key === "+" || key === "-" || !isNaN(key);
        isValid ? addSign(window.event.key) : console.log("false");
      }}
      value={exp}
    ></input>
  );
}
