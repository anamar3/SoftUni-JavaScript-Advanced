function solve(input){
    let obj = {};
    
    for (let i = 0; i < input.length; i++) {
        let splitted = input[i].split(' | ');
        let model = splitted[0];
let name = splitted[1];
let count = Number(splitted[2]);
        
        if(!Object.keys(obj).includes(model)){
            obj[model] = new Map();
            obj[model].set(name,count);
        }else if(Object.keys(obj).includes(model) && !obj[model].has(name)){
            obj[model].set(name,count);

        } else if(obj[model].has(name)){
            let oldValue = obj[model].get(name);
            obj[model].set(name,oldValue+count);
        }
       
        
    }

    for (const kvp of Object.entries(obj)) {
        console.log(`${kvp[0]}`);
for (const [key,value] of kvp[1]) {
    console.log(`###${key} -> ${value}`)
        
}

    }
}

solve(['Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Hyunday | Elantra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes-Benz | W210 | 100',
    'Mini | Clubman | 1000',
    'Mercedes-Benz | W163 | 200']);