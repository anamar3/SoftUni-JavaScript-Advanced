function solve(num1,num2){
    let smallerNum = num1;
    if(num2<smallerNum){
        smallerNum= num2;
    }
    let currGreatestNum =0;
    for(let i = 1; i<=smallerNum;i++){
        if(num1%i ==0 && num2 % i ==0 && i>currGreatestNum){
currGreatestNum=i;
        }

    }
    console.log(currGreatestNum);
}

solve(2154, 458);