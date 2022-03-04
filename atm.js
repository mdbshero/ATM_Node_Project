"use strict"
const prompt = require('prompt-sync')();
const account = require('./Account')
//Validate Pin
function valPin (userPin){
    userPin = prompt('Please enter your four digit pin. ');
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
    return balance;
};
//Withdrawal
function userWithdrawal(withdrawal){
    let userInput = prompt('How much would you like to withdraw from your account? ');
    if (parseInt(userInput) <= account.balance){
        return console.log(true);
    } else if (parseInt(userInput) > account.balance) {
        console.log(`Insufficient funds. Current funds: $${account.balance}; Returning to main menu.`)
        return false
    } else {
        console.log('Input Error. Returning to main menu.')
        return false
    }
}
 userWithdrawal()
//Deposit
function userDeposit(deposit){
    let userInput = prompt('How much money would you like to deposit? ');

    deposit = parseInt(userInput) + account.balance;
    return deposit;
};