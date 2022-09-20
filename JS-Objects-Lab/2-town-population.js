function solve(arr){
let towns = {};
for (const line of arr) {
    let splitted = line.split(' <-> ');
    let town = splitted[0];
    let population = Number(splitted[1]);

   if(!towns[town]){
    towns[town] = 0;
   }
   towns[town] += population;

}
for (const town in towns) {
    console.log(`${town} : ${towns[town]}`);
 }
}

console.log(solve(['Sofia <-> 1200000',

'Montana <-> 20000',

'New York <-> 10000000',

'Washington <-> 2345000',

'Las Vegas <-> 1000000']));