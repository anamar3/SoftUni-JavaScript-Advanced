function solve(array){
    let initial = 1;
    let output = [];
   
    
for (let i = 0; i < array.length; i++) {
   
    if(array[i] == 'add'){
output.push(initial);
    }else if(array[i] == 'remove'){
        output.pop();
    }
    initial++;
    
}
if(output.length==0){
    console.log('Empty');
    return
}
output.forEach(x=>console.log(`${x}`));
}

solve(['remove', 
'remove', 
'remove']

);