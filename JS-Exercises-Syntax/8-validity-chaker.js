function solve(x1,y1,x2,y2){
    let checkingToCenter = Math.sqrt(Math.pow(x1,2) + Math.pow(y1,2));

    if((checkingToCenter*10)%10 != 0){
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }else{
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    }

    checkingToCenter = Math.sqrt(Math.pow(x2,2) + Math.pow(y2,2));
    if((checkingToCenter*10)%10 != 0){
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }else{
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    }

    let checkingToPoint = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2));
    if((checkingToPoint*10)%10 != 0){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    }
}

solve(2, 1, 1, 1);