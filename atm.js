"use strict"
const prompt = require('prompt-sync')();
const account = require('./Account')
const wallet = require("./wallet");
//Validate Pin
function valPin (){
    let userPin = prompt();
    if (userPin.length == 4){
        if (userPin == account.pin){
            return true;
        } else {
            console.log('This is the incorrect user PIN, please try again.');
            return false
        }
    } else {
        console.log('User input was not a PIN, please try again.');
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
        wallet.balance = parseInt(withdrawalAmount) + wallet.balance;
        console.log(`You have withdrawn $${withdrawalAmount}.00. Your current WALLET balance is $${wallet.balance}.00. Your current account balance is $${account.balance}.00.`);
        return true;
    } else if (parseInt(withdrawalAmount) > account.balance) {
        console.log(`Insufficient funds. Current account funds: $${account.balance}.00; Returning to main menu.`);
        return false;
    } else {
        console.log('Input Error. Returning to main menu.')
        return false;
    }
}
//Deposit
function userDeposit(){
    console.log('How much money would you like to deposit?');
    let deposit = prompt();
    if (parseInt(deposit) <= wallet.balance){
        account.balance = parseInt(deposit) + account.balance;
        wallet.balance = wallet.balance - parseInt(deposit);
        return account.balance;
    } else if (parseInt(deposit) > wallet.balance){
        console.log(`Insufficient funds in WALLET. Current wallet funds: $${wallet.balance}.00. Returning to main menu.`);
        return false;
    } else {
        return false;
    }
};


//module export
module.exports.valPin = valPin;
module.exports.getBalance = getBalance;
module.exports.userWithdrawal = userWithdrawal;
module.exports.userDeposit = userDeposit;
