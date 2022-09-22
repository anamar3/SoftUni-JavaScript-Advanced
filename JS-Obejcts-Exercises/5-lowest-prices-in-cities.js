function solve(arr){
  
    let products = [];
    for (let index = 0; index < arr.length; index++) {
       
    
        let splitted = arr[index].split(' | ');
        let food = splitted[1];
let city = splitted[0];
let price = splitted[2];

let product = {food, city, price};
debugger
      if(products.some(p=>p.food == food)){
        let curr = {};
        curr = products.find(p=>p.food == food);
        if(Number(curr.price)>Number(price)){
            products.find(p=>p.food == food).price = price;
            products.find(p=>p.food == food).city = city;
           
        }
      }else{
        products.push(product);
      }
    }
    for (const smth of products) {
        console.log(`${smth.food} -> ${Number(smth.price)} (${smth.city})`)
    }
}

solve(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000']);