function solve(input){
    let count =0;
    let finalCount=0;
for (let row = 0; row < input.length; row++) {
    for (let col = 0; col < input[row].length; col++) {
        let currEl = input[row][col];
       
       if(row-1>=0 && currEl == input[row-1][col]){
        count++;
       
     } if(col-1>=0 && input[row][col-1] == currEl){
        count++;
   
     } if(col +1 <input[row].length && input[row][col+1] == currEl){
        count++;
  
     }  if(row+1< input.length && input[row+1][col] == currEl){
        count++;
     }
    }
    
}
return Math.ceil(count/2);
}

console.log(solve(
    [['2', '2', '5', '7' ,'4'], 
    ['4', '0', '5', '3', '4'], 
    ['2' ,'5', '5', '4', '2']]));