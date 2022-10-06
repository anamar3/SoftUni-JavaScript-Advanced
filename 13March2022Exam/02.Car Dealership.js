class CarDealership{
constructor(name){
        this.totalIncome = 0;
        this.soldCars = [];
        this.availableCars = [];
        this.name = name;
    }
    addCar (model, horsepower, price, mileage){
        if(model == '' || horsepower<0 || price<0 || mileage<0 ){
            throw new Error("Invalid input!");
        }
        this.availableCars.push({model:model,horsepower:horsepower,price:price,mileage:mileage});
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }
    sellCar (model, desiredMileage){
    
        let desiredCar = this.availableCars.find(x=>x.model == model);

        if(desiredCar == undefined){
            throw new Error(`${model} was not found!`);
        }
        let price=0
if(desiredCar.mileage<=desiredMileage){
price =desiredCar.price;
}else if((desiredCar.mileage-desiredMileage)<=40000){
price = desiredCar.price*0.95;
        }else if((desiredCar.mileage-desiredMileage)>40000){
price=desiredCar.price*0.90;

        }
let index = this.availableCars.indexOf(desiredCar);
      this.availableCars.splice(index,1);
        this.soldCars.push({model:desiredCar.model,horsepower:desiredCar.horsepower,price:price.toFixed(2)});
this.totalIncome +=price;

return`${model} was sold for ${price.toFixed(2)}$`;


    }

    currentCar () {
        if(this.availableCars.length==0){
            return "There are no available cars";
        }
        let output = "-Available cars:";

        for (const car of this.availableCars) {
            output +=`\n---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`;
        }
        return output;
        
    }

    salesReport (criteria){
        if(criteria != 'horsepower' && criteria !='model'){
            throw new Error("Invalid criteria!");
        }
let sortedArr = [];
        if(criteria == 'horsepower'){
            sortedArr = this.soldCars.sort((a,b) => b.horsepower - a.horsepower);
        }else{
            sortedArr = this.soldCars.sort((a,b) => a.model.localeCompare(b.model));
        }
let output = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`;
output += `\n-${this.soldCars.length} cars sold:`;

for (const car of sortedArr) {
    output += `\n---${car.model} - ${car.horsepower} HP - ${car.price}$`;
}
return output;
    }

}
let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('model'));
