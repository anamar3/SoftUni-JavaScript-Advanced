function solve(data,criteria){
let input = JSON.parse(data);
let splitted = criteria.split('-');
let result = [];

let [prop,value] = criteria.split('-');

input.filter(x=>x[prop] == value)
.map((x,i) =>  `${i}. ${x.first_name} ${x.last_name} - ${x.email}`)
.forEach(x => {
    console.log(x);
});

if(criteria == 'all'){
    let count = 0;
    for (const person of input) {
       
            console.log(`${count}. ${person.first_name} ${person.last_name} - ${person.email}`);
            count++;
        
    }
}
// for (const person of input) {
//     let entries = Object.entries(person);
   
//     for (const kvp of entries) {
        
//         if(kvp[0] == splitted[0] && kvp[1] == splitted[1]){   
//         result.push(person);
//         }
//     }
// }

// for (let i = 0; i < result.length; i++) {
//     console.log(`${i}. ${result[i].first_name} ${result[i].last_name} - ${result[i].email}`);
    
// }
}

solve(`[{

    "id": "1",
    
    "first_name": "Ardine",
    
    "last_name": "Bassam",
    
    "email": "abassam0@cnn.com",
    
    "gender": "Female"
    
    }, {
    
    "id": "2",
    
    "first_name": "Kizzee",
    
    "last_name": "Jost",
    
    "email": "kjost1@forbes.com",
    
    "gender": "Female"
    
    },
    
    {
    
    "id": "3",
    
    "first_name": "Evanne",
    
    "last_name": "Maldin",
    
    "email": "emaldin2@hostgator.com",
    
    "gender": "Male"
    
    }]`,
    
    'gender-Female');