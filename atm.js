"use strict"
const prompt = require('prompt-sync')();
const account = require('./Account')
//Validate Pin
function valPin (userPin){
    userPin = prompt('Please enter your four digit pin.');
    if ((userPin.length) == 4){
        if (userPin == account.pin){
            return true;
        } else {
            console.log('This is the incorrect user pin, please try again.');
            valPin();
        }
    } else {
        console.log('User input was not a pin, please try again.');
        valPin();
    }
}
// get balance
function getBalance (balance){
    balance = account.balance;
    return console.log(balance);
};
getBalance()

//Withdrawal

//Deposit