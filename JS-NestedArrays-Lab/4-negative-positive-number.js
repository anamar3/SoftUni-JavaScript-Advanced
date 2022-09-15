function solve(array){
    result =[];
 array.forEach(x => {
        if(x>=0){
            result.push(x);
        } else{
            result.unshift(x);
        }
    });

     for (let number of result) {
        console.log(number);
     }
}

solve([3, -2, 0, -1]);