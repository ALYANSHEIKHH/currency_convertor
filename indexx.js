#! usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, //BASED CURRENCY
    GBP: 1.32,
    JPY: 0.92,
    CAD: 0.78,
    MXN: 0.05,
    ZAR: 0.07,
    PKR: 280
};
let userAnswer = await inquirer.prompt([{
        name: "From",
        message: "Kindly,Enter from currency",
        type: "list",
        choices: ["USD", "GBP", "JPY", "CAD", "MXN", "ZAR", "PKR"]
    },
    {
        name: "To",
        message: "Kindly,Enter to currency",
        type: "list",
        choices: ["USD", "GBP", "JPY", "CAD", "MXN", "ZAR", "PKR"]
    },
    {
        name: "Amount",
        type: "number",
        message: "Kindly,Enter your amount "
    }
]);
let fromAmount = currency[userAnswer.From];
let To_Amount = currency[userAnswer.To];
let Amount = userAnswer.Amount;
let baseAmount = Amount / fromAmount; //   base currency USD
let convertedAmount = baseAmount * To_Amount;
console.log(convertedAmount);
// the end
