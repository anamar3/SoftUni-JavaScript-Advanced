function solve(one,two,three){
    let result;
    if(one>two && one >three){
        result=one;
    }else if(two>one && two>three){
        result = two;
    }else if(three>two && three>one){
        result = three;
    }
    console.log('The largest number is '+ result + '.');
}

solve(1,2,3);