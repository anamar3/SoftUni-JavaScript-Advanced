function solve(array) {
    let output = [];
    array.reduce((a, x) => {
        if (x >= a) {
            a = x;
            output.push(x);
        }
        return a;
    }, 0)

    return output;
}

console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));