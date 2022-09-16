function solve(input){
    let result =[];
    let lng = input.length;
for (let i = 0; i < lng; i++) {
    let curr=0;
if(i%2==0){
    curr = input.sort((a,b) => a-b).shift();
}else{
    curr = input.sort((a,b) => b-a).shift();
}
    result.push(curr);
}

return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));