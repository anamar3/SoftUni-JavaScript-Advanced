function solve(arr){
    output = '';
    let i=0;
    for (let index = 0; index < arr.length; index+=2) {
        
       output+=`${arr[index]} `;
        i++
    }
    console.log(output);
}

solve(['5', '10']);