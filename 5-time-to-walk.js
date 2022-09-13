function solve(steps,footPrintLength,speed){
    let metersInSeconds = speed*1000/3600;
    let distance = footPrintLength * steps;
    let rest = Math.floor(distance/500)*60;
    let timeInSeconds = (distance/metersInSeconds) + rest;

    let hours = Math.floor(timeInSeconds / 3600).toFixed(0).padStart(2,'0');
    let minutes = Math.floor(timeInSeconds/60).toFixed(0).padStart(2,'0');
    let seconds = (timeInSeconds%60).toFixed(0).padStart(2,'0');
   
   
    console.log(`${hours}:${minutes}:${seconds}`);
}

solve(4000, 0.60, 5);