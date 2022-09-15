function solve(array){
let result = [];
    for (let index = 1; index < array.length; index+=2) {
       result.push(array[index]);
        
    }
   
for (let index = 0; index < result.length; index++) {
   result[index] *=2;
    
}
return result.reverse().join(' ');

}

console.log(solve([3, 0, 10, 4, 7, 3]));