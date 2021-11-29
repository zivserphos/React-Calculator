import React, { useState } from "react";
import { ResultArea } from "../ResultArea";
import { CalcArea } from "../CalcArea";
import CalculateResult from "../../modules/MathFunctions";

export function Calculator() {
  const [exp, setExp] = useState("");

  const addSignToExp = (sign) => {
    if (sign === "=") {
      return setExp(CalculateResult(exp));
    }
    if (sign === "AC") {
      return setExp("");
    }
    if (sign === "DEL") {
      return setExp(exp.slice(0, exp.length - 1));
    }
    if (sign === ".") {
      const nums = exp.split(/[X/+-]/g);
      const lastNum = nums[nums.length - 1];
      const lastChar = exp[exp.length - 1];
      if (!lastNum.includes(".") && !isNaN(lastChar))
        return setExp(exp.concat(sign));
      return;
    }
    if (isNaN(sign)) {
      const str = exp;
      const lastSign = str.charAt(str.length - 1);
      if (isNaN(lastSign) && sign !== ".") return;
    }
    const newExp = exp.concat(sign);
    setExp(newExp);
  };

  return (
    <div className="calculator">
      <ResultArea addSign={addSignToExp} exp={exp} />
      <CalcArea addSign={addSignToExp} />
    </div>
  );
}
