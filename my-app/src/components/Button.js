import React from "react";

export function Button({ sign, id, addSign }) {
  return (
    <button
      id={sign === "=" ? "equals" : id}
      className="button"
      onClick={() => addSign(sign)}
    >
      {sign}
    </button>
  );
}
