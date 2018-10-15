var readline = require('readline-sync');
var yourMoney = readline.question("how much money do you have? ");

var currencyChoices ={
    AUD: 1.41, 
    GBP: .76, 
    EUR: .86, 
    JPY: 112.21, 
    CHF: .99 , 
    AFN: 75.96, 
    ALL: 108.45, 
    DZD: 118.33, 
    AOA: 301.42,
    ARS: 36.64,
    }
    var currencyArray = ["AUD", "GBP", "EUR", "JPY", "CHF", "AFN", "ALL", "DZD", "AOA", "ARS"];
    
    for (let key in currencyChoices) {
       console.log(key, currencyChoices[key]);
       }
       
var currencyx = readline.question("Her are our currencies. Which one would you like to convert your money to?")