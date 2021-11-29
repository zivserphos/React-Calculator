function calculateResult(exp) {
  let regex = /[0-9]*[.]?[0-9]+[X/][0-9]*[.]?[0-9]+/;
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
  const numbers = exp.split(/[X/+-]/g);
  console.log(numbers);
  const oper = exp.replace(/[0-9]*[.]?[0-9]/g, "");
  const [num1, num2] = [numbers[0], numbers[1]];
  console.log(num1);
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
