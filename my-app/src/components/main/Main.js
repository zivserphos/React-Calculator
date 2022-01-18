import React, { useState } from "react";
import { ResultArea } from "../ResultArea";
import { CalcArea } from "../CalcArea";
import CalculateResult from "../../modules/MathFunctions";

export function Calculator() {
  const [exp, setExp] = useState("");
  const [twoSigns, setTwoSigns] = useState(false);

  const addSignToExp = (sign) => {
    if (exp === "0") {
      if (isNaN(sign)) return;
      return setExp(sign);
    }
    if (sign === "0") {
      const nums = exp.split(/[X/+-]/g);
      const lastNum = nums[nums.length - 1];
      setTwoSigns(false);
      if (lastNum.startsWith("0") && lastNum[1] === undefined) return;
      return setExp(exp.concat(sign));
    }

    if (sign === "=") {
      setTwoSigns(false);
      return setExp(CalculateResult(exp));
    }
    if (sign === "AC") {
      setTwoSigns(false);
      return setExp("0");
    }
    if (sign === "DEL") {
      setTwoSigns(false);
      return setExp(exp.slice(0, exp.length - 1));
    }
    if (sign === ".") {
      const nums = exp.split(/[X/+-]/g);
      const lastNum = nums[nums.length - 1];
      const lastChar = exp[exp.length - 1];
      if (!lastNum.includes(".") && !isNaN(lastChar))
        return setExp(exp.concat(sign));
      setTwoSigns(false);
      return;
    }
    if (isNaN(sign)) {
      const str = exp;
      const lastSign = str.charAt(str.length - 1);
      if (isNaN(lastSign) && sign !== ".") {
        if ((lastSign === "X" || lastSign === "/") && sign === "-") {
          setTwoSigns(true);
          return setExp(exp.slice().concat(sign));
        }
        if (!twoSigns) return setExp(exp.slice(0, exp.length - 1).concat(sign));
        return;
      }
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
