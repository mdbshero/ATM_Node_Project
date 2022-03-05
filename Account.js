"use strict"
//user account includes current balance and pin
let wallet = require("./wallet");

//User Data Object
let user = {
    pin:1234,
    balance: wallet.balance
};

//module export
module.exports.pin = user.pin;
module.exports.balance = user.balance;