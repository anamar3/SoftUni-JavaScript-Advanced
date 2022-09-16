function solve(matrix){
    let sum = 0;
for (let row = 0; row < matrix.length; row++) {
    let currColSum = 0;
for (let col = 0; col < matrix[row].length; col++) {
  currColSum += matrix[row][col];
  
}
if(sum==0){
    sum=currColSum;
  }else{
    if(sum != currColSum){
        return false;
    }
  }
}


for (let col = 0; col < matrix.length; col++) {
    let rowSum = 0;
    for (let row = 0; row < matrix.length; row++) {
       rowSum += matrix[row][col];
      
    }
    if(rowSum!=sum){
        return false;
       }
}
return true;
}

console.log(solve(
    [[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   
   ));