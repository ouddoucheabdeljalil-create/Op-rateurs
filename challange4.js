const prompt = require('prompt-sync')();
let num1 = Number(prompt("saisisez le primier nombre : "));
let num2 = Number(prompt("saisisez le deuxéme nombre : "));
if (num1 === num2){
    console.log(`${num1 } = ${num2}`);
}
else if(num1 > num2){
    console.log(`${num1 } > ${num2}`);
}
else{
    console.log(`${num1 } < ${num2}`);
}