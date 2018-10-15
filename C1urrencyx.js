let amount = Number(prompt("How much money do you have?."));
let currentCurrency = prompt("What currency are you using?");
let desiredCurrency = prompt("What currency do you want to convert it to? EUR, JPY, GBP, USD, or  BRL");

var currencyRates = {
    "USD": 1,
  "EUR": .8,
  "JPY": .7,
  "XXX": 5
};

function convertCurrency(currentCurrency, desiredCurrency, amount) {
  var currentRate = currencyRates[currentCurrency];
  var desiredRate = currencyRates[desiredCurrency];

  var USDAmount = amount * currentRate;
  var convertedAmount = USDAmount / desiredRate;

  return convertedAmount; // I think this is the right algorithm :/
}



var convertedCurrencyAmount = convertCurrency(currentCurrency, desiredCurrency, amount);
