function solve(array){
    array.sort((a,b) => a - b);

    let startIndex = Math.floor(array.length/2);
    
let result = [];
result = array.slice(startIndex,array.length);
    return result;
}

solve([3, 19, 14, 7, 2, 19, 6]);