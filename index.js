"use strict"
const prompt = require('prompt-sync')();
const atm = require('./atm');
//User Welcome and PIN prompt.
function userWelcome(){
    let userPromptPin = atm.valPin();
    while (userPromptPin !== true){
        userPromptPin = atm.valPin();
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
            console.log(`Your current balance is $${bal}.00`);
            userInput = "";
            atmMenu();
            break;
        case "2":
            let userDeposit = atm.userDeposit();
            console.log(`Your current balance after the deposit is $${userDeposit}.00.`);
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

//run ATM Function
function runATM(){
    if (userWelcome() === true){
        atmMenu();
    }
}

// To run ATM please enter node index.js in the terminal.
runATM();