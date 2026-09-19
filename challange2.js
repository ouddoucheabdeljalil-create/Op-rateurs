const prompt = require('prompt-sync')();
let num1 = 20;
let num2 = 8 ;

console.log(`number 1 = ${num1} \nnumber 2 = ${num2}`);

let x = num1;
num1 = num2;
num2 = x ;

console.log("--------------")
console.log(`number 1 = ${num1} \nnumber 2 = ${num2}`);
