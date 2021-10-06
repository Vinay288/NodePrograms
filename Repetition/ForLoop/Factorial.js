const prompt = require("prompt-sync")();
let factorial;
let number = parseInt(prompt("enter number "))
if (number == 0 || number == 1)
    factorial = 1;
else
    for (var i = number; i >= 1; i--)
        factorial = factorial * index;
console.log("The factorial of " + number + " is " + factorial);