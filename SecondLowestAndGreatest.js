//Generate 10 random numbers and store into array.
let num1 = Math.floor(Math.random()*(999-100+1)+100);
let num2 = Math.floor(Math.random()*(999-100+1)+100);
let num3 = Math.floor(Math.random()*(999-100+1)+100);
let num4 = Math.floor(Math.random()*(999-100+1)+100);
let num5 = Math.floor(Math.random()*(999-100+1)+100);
let num6 = Math.floor(Math.random()*(999-100+1)+100);
let num7 = Math.floor(Math.random()*(999-100+1)+100);
let num8 = Math.floor(Math.random()*(999-100+1)+100);
let num9 = Math.floor(Math.random()*(999-100+1)+100);
let num10 = Math.floor(Math.random()*(999-100+1)+100);

let randomElement = new Array(num1,num2,num3,num4,num5,num6,num7,num8,num9,num10);
 function secondMax (randomElement){ 
    let max = Math.max.apply(null, randomElement); 
        maxi = randomElement.indexOf(max);
        randomElement[maxi] = -1; 
    let secondMax = Math.max.apply(null, randomElement);
    randomElement[maxi] = max;
    return secondMax;
}

function secondMin(randomElement){
    let min = Math.min.apply(null, randomElement); 
    mini = randomElement.indexOf(min);
    randomElement[mini] = 1000;
    let secondMin = Math.min.apply(null, randomElement);
    return secondMin;
}

let secondMaxElement = secondMax(randomElement);
console.log(secondMaxElement);
let secondMinElement = secondMin(randomElement);
console.log(secondMinElement);