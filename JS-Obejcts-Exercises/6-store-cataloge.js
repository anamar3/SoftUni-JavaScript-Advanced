function solve(arr){
let result = [];

while (arr.length>0) {
    let [name,price] = arr.shift().split(' : ');
    let obj = {name,price};
    result.push(obj);
}
function SortArray(x, y){
    if (x.name < y.name) {return -1;}
    if (x.name > y.name) {return 1;}
    return 0;
}
let sortedArr = result.sort(SortArray);
let currLetter = '';
for (const fruit of sortedArr) {
    if(currLetter != fruit.name.charAt(0)){
        currLetter = fruit.name.charAt(0);
        console.log(`${currLetter}`);
    }
    
    console.log(`  ${fruit.name}: ${Number(fruit.price)}`);
}
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499', 
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25', 
'Anti-Bug Spray : 15',
'T-Shirt : 10']);