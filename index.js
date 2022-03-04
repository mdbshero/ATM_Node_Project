"use strict"
const prompt = require('prompt-sync')();
const atm = require('./atm');
//run ATM

function userWelcome(){
    let userPromptPin = atm.valPin(prompt("Welcome to Matthew's ATM. Please enter your 4 digit PIN: "));
    if (userPromptPin === true){
        console.log('PIN Accepted.');
        return true;
    } else {
        console.log('PIN Incorrect.');
        return false;
    }
}

console.log(userWelcome())