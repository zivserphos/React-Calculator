import React from "react";

export function ResultArea({ exp, addSign }) {
  return (
    <input
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

// class ResultArea extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     return (
//       <input
//         className="resultArea"
//         onKeyPress={() => {
//           const key = window.event.key;
//           const isValid = key === "+" || key === "-" || !isNaN(key);
//           isValid ? this.props.addSign(window.event.key) : console.log("false");
//         }}
//         value={this.props.exp}
//       ></input>
//     );
//   }
// }

// export default ResultArea;
