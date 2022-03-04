"use strict"
const prompt = require('prompt-sync')();
const atm = require('./atm');
//User Welcome and PIN prompt.
function userWelcome(){
    let userPromptPin = atm.valPin(prompt("Welcome to Matthew's ATM. Please enter your 4 digit PIN: "));
    while (userPromptPin !== true){
        userPromptPin = atm.valPin(prompt("Please enter your PIN: "));
    }
    return true
}

//run atm
function atmMenu(){
    console.log("Main Menu. For BALANCE enter 1; for DEPOSIT enter 2; for WITHDRAWAL enter 3; To END SESSION enter 4:")
    let userInput = prompt();
    switch(userInput){
        case "1":
            atm.getBalance();
            let bal = atm.getBalance();
            console.log(`Your current balance is $${bal}`);
            userInput = "";
            atmMenu();
            break;
        case "2":
            let userDeposit = atm.userDeposit();
            console.log(`your current balance after the deposit is $${userDeposit}.`);
            userInput = "";
            atmMenu();
            break;
        case "3":
            atm.userWithdrawal();
            userInput = "";
            atmMenu();
            break;
        case "4":
            console.log("Thank you for using this ATM. Goodbye.");
            break;
        default:
            atmMenu();
    }
}
