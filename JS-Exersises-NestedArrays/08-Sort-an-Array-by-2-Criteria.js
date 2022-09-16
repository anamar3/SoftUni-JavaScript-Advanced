function solve(array){
array.sort(function(a,b){
    let n = a.length - b.length;
    if(n !==0){
        return n;
    }
    return a.localeCompare(b);
});

console.log(array.join(`\n`));
}

solve(['test', 
'Deny', 
'omen', 
'Default']

);