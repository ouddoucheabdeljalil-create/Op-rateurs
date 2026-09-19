const prompt = require('prompt-sync')();
let num1 = Number(prompt("saisissez le prix : "));
let num2 = Number(prompt("saisissez le pourcentage de réduction : "));

if (num2 < 0 || num2 > 100 ){
    console.log("immpossible!")
}
else{
    console.log(`le prix final = ${num1 - num2} DH`);
}

