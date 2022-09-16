function solve(array,num){
let output=[];

for (let i = 0; i < num; i++) {
 
let currNum = array[array.length -1];
array.unshift(currNum);
array.pop();

}
console.log(array.join(' '))
}




solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);