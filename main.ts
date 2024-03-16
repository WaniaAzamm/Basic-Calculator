import inquirer from "inquirer";
const input1 = await inquirer.prompt([
  {
    name: "num1",
    type: "number",
    message: "Enter your First Number:",
  },

  {
    name: "num2",
    type: "number",
    message: "Enter your Second Number:",
  },

  {
    name: "operator",
    type: "list",
    message: "Select one of the operators to perform action:",
    choices: [
      "addition",
      "subtraction",
      "Multiplication",
      "Division",
      "Modulus",
    ],
  },
]);

if (input1.operator === "addition") {
  console.log(input1.num1 + input1.num2);
}
else if (input1.operator === "subtraction") {
  console.log(input1.num1 - input1.num2);
}
else if (input1.operator === "Multiplication") {
  console.log(input1.num1 * input1.num2);
}
else if (input1.operator === "Division") {
  console.log(input1.num1 / input1.num2);
}
else if (input1.operator === "Modulus") {
  console.log(input1.num1 % input1.num2);
}
else {
  console.log("Invalid Operator");
};
