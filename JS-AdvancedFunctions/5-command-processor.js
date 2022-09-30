
function solution(){
    let result = '';
   return{
    append(input){
result+=input;
    },
removeStart(num){
result = result.substring(num);
},
removeEnd(num){
result = result.slice(0, -num);
},
print(){
console.log(result);
}
    }
}
let secondZeroTest = solution();

secondZeroTest.append('123');

secondZeroTest.append('45');

secondZeroTest.removeStart(2);

secondZeroTest.removeEnd(1);

secondZeroTest.print();