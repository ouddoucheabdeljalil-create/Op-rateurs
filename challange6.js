const prompt = require('prompt-sync')();
let num = Number(prompt("entrez le nombre : "));

if( num >= 10 && num <= 100){
    console.log("oui , il fait partie des nombres compris entre 10 et 100");
}
else{
    console.log("il n`apparttient pas aux nombres compris entre 10 et 100");
}