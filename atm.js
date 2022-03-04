"use strict"
const prompt = require('prompt-sync')();
const account = require('./Account')
//Validate Pin
function valPin (){
    console.log("Welcome to Matthew's ATM. Please enter your 4 digit PIN:")
    let userPin = prompt();
    if (userPin.length == 4){
        if (userPin == account.pin){
            return true;
        } else {
            console.log('This is the incorrect user pin, please try again.');
            return false
        }
    } else {
        console.log('User input was not a pin, please try again.');
        return false
    }
}
// get balance
function getBalance (){
    let balance = account.balance;
    return balance;
};
//Withdrawal
function userWithdrawal(){
    console.log('How much would you like to withdraw from your account?');
    let withdrawalAmount = prompt();
    if (parseInt(withdrawalAmount) <= account.balance){
        account.balance = account.balance - parseInt(withdrawalAmount);
        console.log(`You have withdrawn $${withdrawalAmount}.00. Your current balance is $${account.balance}.00.`)
        return true;
    } else if (parseInt(withdrawalAmount) > account.balance) {
        console.log(`Insufficient funds. Current funds: $${account.balance}.00; Returning to main menu.`)
        return false
    } else {
        console.log('Input Error. Returning to main menu.')
        return false
    }
}
//Deposit
function userDeposit(){
    console.log('How much money would you like to deposit?');
    let deposit = prompt();
    account.balance = parseInt(deposit) + account.balance;
    return account.balance;
};


//module export
module.exports.valPin = valPin;
module.exports.getBalance = getBalance;
module.exports.userWithdrawal = userWithdrawal;
module.exports.userDeposit = userDeposit;
