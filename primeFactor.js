function primeFactors(n){
    var factors = [], 
        divisor = 2;
  
    while(n>2){
      if(n % divisor == 0){
         factors.push(divisor); 
         n= n/ divisor;
      }
      else{
        divisor++;
      }     
    }
    return factors;
  }
const prompt = require('prompt-sync')();
let number = prompt('enter the number');
number = Number(number);
let factors = primeFactors(number);
console.log(factors);