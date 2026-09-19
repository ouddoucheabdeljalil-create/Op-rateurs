const prompt = require('prompt-sync')();
let num1 = Number(prompt("saisisez le primier nombre : "));
let num2 = Number(prompt("saisisez le deuxéme nombre : "));

console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} x ${num2} = ${num1 * num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} / ${num2} = ${num1 / num2}`);