const prompt = require("prompt-sync")();
let number = parseInt(prompt("enter number "))
console.log('The  prime factors are ');
for (let i = 2; i * i <= number; i++)
    while (number % i == 0) {
        console.log(i);
        number /= i;
    }
if (number != 1)
    console.log(number)