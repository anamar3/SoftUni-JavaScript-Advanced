function solve(array,startF,endF){
    let startIndex = array.indexOf(startF);
    let endIndex = array.indexOf(endF);

    return array.slice(startIndex,endIndex+1);
}

console.log(solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));