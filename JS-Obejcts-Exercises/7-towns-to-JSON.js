function solve(arr){
    let result = [];

    
    let splittedOnetime = arr[0].split(' ');
   let Town = splittedOnetime[1];
   let Latitude = splittedOnetime[3];
   let Longitude = splittedOnetime[5];

   for (let i = 1; i < arr.length; i++) {
   let splitted = arr[i].split('|');
   
  
 let j =1;
    let obj = {};
    obj.Town = splitted[j].trim();
    obj.Latitude = roundToTwo(Number(splitted[j+1]));
    obj.Longitude = roundToTwo(Number(splitted[j+2]));
   
    result.push(obj);
     }
     console.log(JSON.stringify(result));
     function roundToTwo(num) {
        return +(Math.round(num + "e+2")  + "e-2");
    }
     
}
    

solve(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']);
