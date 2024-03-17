import inquirer from "inquirer";
import chalk from "chalk";
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
    chalk.greenBright(console.log(input1.num1 + input1.num2));
}
else if (input1.operator === "subtraction") {
    chalk.greenBright(console.log(input1.num1 - input1.num2));
}
else if (input1.operator === "Multiplication") {
    chalk.greenBright(console.log(input1.num1 * input1.num2));
}
else if (input1.operator === "Division") {
    chalk.greenBright(console.log(input1.num1 / input1.num2));
}
else if (input1.operator === "Modulus") {
    chalk.greenBright(console.log(input1.num1 % input1.num2));
}
else {
    chalk.greenBright(console.log("Please Select valid Operator"));
}
