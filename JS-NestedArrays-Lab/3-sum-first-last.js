function solve(arr){
    let last = Number(arr.pop());
    let first = Number(arr.shift());
    return last+first;
}
console.log(solve(['20', '30', '40']))