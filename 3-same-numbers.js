function solve(number){

let imputToString = number.toString();
    let currChar = imputToString[0];
    let sum=0;
for (let j = 0; j < imputToString.length; j++) {
    sum+=Number(imputToString[j]);
    
}
    for (let i = 1; i < imputToString.length; i++) {
        
        if(currChar !== imputToString[i]){
            console.log(false);
            console.log(sum)
            return;
        }
        
    }
    console.log(true);
    console.log(sum);
}

solve(1234);