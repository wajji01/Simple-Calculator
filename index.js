#! /usr/bin/env node
import inquirer from "inquirer";
let condition = true;
console.log("===============================");
console.log("      Wajahat Calculator       ");
console.log("===============================");
while (condition) {
    const answer = await inquirer.prompt([
        { message: "Enter your first number", type: "number", name: "firstnum" },
        { message: "Enter your second number", type: "number", name: "secondnum" },
        {
            message: "Enter a valid operator",
            type: "list",
            name: "operator",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        },
    ]);
    // conditional statment
    if (answer.operator === "Addition") {
        console.log("Addition of first and second number is " +
            (answer.firstnum + answer.secondnum));
    }
    else if (answer.operator === "Subtraction") {
        console.log("Subtraction of first and second number is " +
            (answer.firstnum - answer.secondnum));
    }
    else if (answer.operator === "Multiplication") {
        console.log("Multiplication of first and second number is " +
            answer.firstnum * answer.secondnum);
    }
    else if (answer.operator === "Division") {
        console.log("Division of first and second number is " +
            answer.firstnum / answer.secondnum);
    }
    else {
        console.log("Please select a valid operator");
    }
    let cond = await inquirer.prompt([
        {
            name: "more",
            type: "confirm",
            message: "Do you want do more ?",
            default: "false",
        }
    ]);
    condition = cond.more;
}
console.log("===============================");
console.log("      Thanks For Comming       ");
console.log("===============================");
