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

console.log(userWelcome())
//run atm
//function runATM(){
//}