#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
  {
    type: "number",
    message: "enter first number",
    name: "firstNumber",
  },
  {
    type: "number",
    message: "enter first number",
    name: "secondNumber",
  },
  {
    type: "list",
    message: "select one of the operator to perform an operation",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);
if (answer.operator === "addition") {
  console.log(
    `The sum of these two values is = ${
      answer.firstNumber + answer.secondNumber
    }`
  );
} else if (answer.operator === "subtraction") {
  console.log(
    `The sub of these two values is = ${
      answer.firstNumber - answer.secondNumber
    }`
  );
} else if (answer.operator === "multiplication") {
  console.log(
    `The multiplication of these two values is = ${
      answer.firstNumber * answer.secondNumber
    }`
  );
} else if (answer.operator === "division") {
  console.log(
    `The division of these two values is = ${
      answer.firstNumber / answer.secondNumber
    }`
  );
} else {
  console.log("please selcet a valid operator");
}
