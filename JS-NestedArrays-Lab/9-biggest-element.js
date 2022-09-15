function solve(matrix){
debugger
    const max = Math.max(...[].concat(...matrix));
    return max;
}

console.log(solve([[20, 50, 10],
    [8, 33, 145]]
   ));