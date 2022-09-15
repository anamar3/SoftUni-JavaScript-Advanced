function solve(nestedArr){
   
    let theLength= nestedArr[0].length+1;
    let theLength2= nestedArr[0].length/2;

    let sum = 0;
let sum2=0;
let result =[];
result = nestedArr.flat();


    for (let i = 0; i < result.length; i+=theLength) {
       sum+=Number(result[i]);
        
    }
    
console.log(sum);

    for (let i = result.length/theLength2; i <=result.length; i+=theLength) {
        sum2+=Number(result[i]);
         
     }
    console.log(sum);
    console.log(sum2);
   
}


// function diagonalSums(matrix) {
 
//     let mainSum = 0, secondarySum = 0;
//     for (let row = 0; row < matrix.length; row++) {
//         mainSum += matrix[row][row];
//         secondarySum += matrix[row][matrix.length - row - 1];
//     }
//     return mainSum + ' ' + secondarySum;
// }

solve([[20, 40],
    [10, 60]]
   );