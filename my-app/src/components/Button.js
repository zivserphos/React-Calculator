import React from "react";

export function Button({ sign, id }) {
  return (
    <button
      id={sign === "=" ? "equals" : id}
      className="button"
      onClick={() => this.props.addSign(sign)}
    >
      {sign}
    </button>
  );
}

// class Button extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     return (
//       <button
//         id={this.props.sign === "=" ? "equals" : this.props.id}
//         className="button"
//         onClick={() => this.props.addSign(this.props.sign)}
//       >
//         {this.props.sign}
//       </button>
//     );
//   }
// w}
