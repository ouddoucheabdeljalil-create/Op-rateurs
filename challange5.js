const prompt = require('prompt-sync')();
let num = Number(prompt("entrez le nombre de secondes : "));

let hours = num / 3600 ;
let minutes = num / 60;
console.log(`hours = ${hours} \nminut = ${minutes}`);