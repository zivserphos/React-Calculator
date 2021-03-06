function calculateResult(exp) {
  let regex = /[0-9]*[.]?[0-9]+[X/][-]?[0-9]*[.]?[0-9]+/;
  while (exp.match(regex)) {
    exp = exp.replace(regex, calculateExp(exp.match(regex)[0]));
  }
  regex = /-?[0-9]*[.]?[0-9]+[+-][0-9]*[.]?[0-9]+/;
  while (exp.match(regex)) {
    exp = exp.replace(regex, calculateExp(exp.match(regex)[0]));
  }
  return exp;
}

function calculateExp(exp) {
  const isMinus = exp.charAt(0) === "-" ? true : false;
  if (isMinus) exp = exp.slice(1);
  const numbers = exp.split(/[X/+-][-]?/g);
  console.log(numbers);
  let oper = exp.replace(/[0-9]*[.]?[0-9]/g, "");
  if (oper.length > 1) {
    oper = oper.slice(0, 1);
    numbers[1] *= -1;
  }
  let [num1, num2] = [numbers[0], numbers[1]];
  if (isMinus) num1 = num1 * -1;
  if (oper === "X") {
    return (Number(num1) * Number(num2)).toString();
  }
  if (oper === "/") {
    return (Number(num1) / Number(num2)).toString();
  }
  if (oper === "+") {
    return (Number(num1) + Number(num2)).toString();
  }
  if (oper === "-") {
    return (Number(num1) - Number(num2)).toString();
  }
}

export default calculateResult;
