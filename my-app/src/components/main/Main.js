import React, { useState } from "react";
import ResultArea from "../ResultArea";
import CalcArea from "../CalcArea";
import CalculateResult from "../../modules/MathFunctions";

export function Calculator() {
  const [exp, setExp] = useState("");

  const addSignToExp = (sign) => {
    if (sign === "=") {
      return setExp(CalculateResult(this.state.exp));
    }
    if (sign === "AC") {
      return setExp("");
    }
    if (isNaN(sign)) {
      const str = exp;
      const lastSign = str.charAt(str.length - 1);
      if (lastSign === "." && sign === ".") return false;
      if (isNaN(lastSign) && sign !== "." && str.includes(".")) {
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

// class Calculator extends Component {
//   // eslint-disable-next-line no-useless-constructor
//   constructor(props) {
//     super(props);
//     this.state = {
//       exp: "",
//     };
//   }
//   addSignToExp = (sign) => {
//     if (sign === "=") {
//       return this.setState({
//         exp: CalculateResult(this.state.exp),
//       });
//     }
//     if (sign === "AC") {
//       return this.setState({
//         exp: "",
//       });
//     }
//     if (isNaN(sign)) {
//       const str = this.state.exp;
//       const lastSign = str.charAt(str.length - 1);
//       console.log(str);
//       if (lastSign === "." && sign === ".") return false;
//       if (isNaN(lastSign) && sign !== "." && str.includes(".")) {
//         return;
//       }
//     }
//     const newExp = this.state.exp.concat(sign);
//     this.setState({
//       exp: newExp,
//     });
//   };
//   render() {
//     return (
//       <div className="calculator">
//         <ResultArea addSign={this.addSignToExp} exp={this.state.exp} />
//         <CalcArea addSign={this.addSignToExp} />
//       </div>
//     );
//   }
// }

// export default Calculator;
