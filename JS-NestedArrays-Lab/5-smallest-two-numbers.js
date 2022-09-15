function solve(array){
array.sort((a,b) => a-b);
let result = array.slice(0,2);
console.log(result.join(' '));



    
//     let result = [];
//     let smallestNum1 = Number(Math.min(...array));  
//     let newArr = [];
//     newArr = array.filter(x=>x !== min);
// let smallestNum2 = Number(Math.min(...newArr));
// result.unshift(min2);
// result.unshift(min);
// console.log(result.join(' '));
// let result = [];
// const min = array.reduce((a, b) => Math.min(a, b))

// let newArr = array.filter(x=>x !== min);
// const min2 = newArr.reduce((a, b) => Math.min(a, b))
// result.unshift(min2);
// result.unshift(min);
// console.log(result.join(' '));

}

solve([30, 15, 50, 5]);