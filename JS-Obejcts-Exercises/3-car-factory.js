function solve(car={}){
let newCar = {};
newCar.model = car.model;
if(car.power <=105){
    newCar.engine = { power: 90, volume: 1800 };
}else if(car.power>105 && car.power<=150){
    newCar.engine = {power: 120, volume: 2400};
}else{
    newCar.engine = {power: 200, volume: 3500};
}

newCar.carriage = {type: car.carriage, color: car.color};
let wheel = car.wheelsize;
if(car.wheelsize%2 == 0){
 wheel -=1;
}
newCar.wheels = [wheel, wheel, wheel, wheel];
return {model, engine, carriage, wheels} = newCar;
}

console.log(solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }));