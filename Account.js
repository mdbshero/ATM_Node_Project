"use strict"
//user account includes current balance and pin
const prompt = require('prompt-sync')();

//User Data Object
let user = {
    pin:1234,
    balance:0
};

//module export
module.exports.pin = user.pin;
module.exports.balance = user.balance;