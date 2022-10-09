function solve(input){
    
    let map = new Map();
    let result = new Map();
for (let i = 0; i < input.length; i++) {
   let splitted = input[i].split(' => ');
   let fruit = splitted[0];
   let quantity = Number(splitted[1]);
    if(map.has(fruit)){
        let oldValue = map.get(fruit);
        map.set(fruit,oldValue+quantity);
    }else{
        map.set(fruit,quantity);
    }

    if(map.get(fruit) >= 1000){
        let curr = map.get(fruit); 
        if(!Array.from(result.keys()).includes(fruit)){
          
result.set(fruit,Math.floor(curr/1000));
        }else{
            let oldV = result.get(fruit);
            result.set(fruit,oldV+ Math.floor(curr/1000));
        }
        map.set(fruit,curr%1000);
    }

   
}

for (const [fruit,value] of Array.from(map.entries())) {
   
    if(value >= 1000){
        
        result.set(fruit,Math.floor(value/1000));
    }
    

    
}

for (const fruit of Array.from(result.keys())) {
    console.log(`${fruit} => ${result.get(fruit)}`)
}
}

solve(['Kiwi => 234',

'Pear => 2345',

'Watermelon => 3456',

'Kiwi => 4567',

'Pear => 5678',

'Watermelon => 6789']);