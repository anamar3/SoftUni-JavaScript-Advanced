function printFullName(firstName,lastName){
    console.log(firstName + lastName);
};

printFullName('Stamat', 'Petrov');


let countDown= function(number){
    for(let i = number; i>=0; i--){
console.log(i);
    }
};

countDown(7);

let countUp = (max) =>{
    for(let i=0;i<=max;i++){
        console.log(i);
    }
};

countUp(7);

function sum(a,b){
    return a+b;
};

let sumArrow = (a,b) =>a+b;
let result = sum(1,3);
console.log(result);

//Method
let firstName = 'Pesho';
console.log(firstName.toUpperCase());

