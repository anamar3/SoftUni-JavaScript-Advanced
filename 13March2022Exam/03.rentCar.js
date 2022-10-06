const rentCar = {
    searchCar(shop, model) {
        let findModel = [];
        if (Array.isArray(shop) && typeof model == 'string') {
            for (let i = 0; i < shop.length; i++) {
                if (model == shop[i]) {
                    findModel.push(shop[i]);
                }
            }
            if (findModel.length !== 0) {
                return `There is ${findModel.length} car of model ${model} in the catalog!`;
            } else {
                throw new Error('There are no such models in the catalog!')
            }
        } else {
            throw new Error('Invalid input!')
        }
    },
    calculatePriceOfCar(model, days) {
        let catalogue = {
            Volkswagen: 20,
            Audi: 36,
            Toyota: 40,
            BMW: 45,
            Mercedes: 50
        };

        if (typeof model == 'string' && Number.isInteger(days)) {
            if (catalogue.hasOwnProperty(model)) {
                let cost = catalogue[model] * days;
                return `You choose ${model} and it will cost $${cost}!`
            } else {
                throw new Error('No such model in the catalog!')
            }
        } else {
            throw new Error('Invalid input!')
        }
    },
    checkBudget(costPerDay, days, budget) {
        if (!Number.isInteger(costPerDay) || !Number.isInteger(days) || !Number.isInteger(budget)) {
            throw new Error('Invalid input!');
        } else {
            let cost = costPerDay * days;
            if (cost <= budget) {
                return `You rent a car!`
            } else {
                return 'You need a bigger budget!'
            }
        }
    }
}

const expect = require('chai').expect;

describe("Tests …", function() {
    describe("searchCar", function() {
        it("shop is not an array", function() {
            expect(()=>rentCar.searchCar('shop','hey')).to.throw('Invalid input!');
        });
        it("the second one is not a string", function() {
            expect(()=>rentCar.searchCar([],3)).to.throw('Invalid input!');
        });
        it("the second one is not a string", function() {
            expect(rentCar.searchCar(['honda','mustang','honda'],'honda')).to.be.equal(`There is 2 car of model honda in the catalog!`);
        });
        it("the second one is not a string", function() {
            expect(()=>rentCar.searchCar([],'honda')).to.throw('There are no such models in the catalog!');
        });
        it("the second one is not a string", function() {
            expect(()=>rentCar.searchCar(['mustang','ferrari'],'honda')).to.throw('There are no such models in the catalog!');
        });
     });
     describe('calcultePriceOfCar',()=>{
        it('not a string',()=>{
            expect(()=>rentCar.calculatePriceOfCar(2,2)).to.throw('Invalid input!');
        });
        it('not a number',()=>{
            expect(()=>rentCar.calculatePriceOfCar('2','2')).to.throw('Invalid input!');
        });
        it('not a integer',()=>{
            expect(()=>rentCar.calculatePriceOfCar('2',2.34)).to.throw('Invalid input!');
        });
        it('it works',()=>{
            expect(rentCar.calculatePriceOfCar('Audi',5)).to.be.equal(`You choose Audi and it will cost $180!`);
        });
        it('it works even with 0',()=>{
            expect(rentCar.calculatePriceOfCar('BMW',0)).to.be.equal(`You choose BMW and it will cost $0!`);
        });
        it('not such model in catalog',()=>{
            expect(()=>rentCar.calculatePriceOfCar('Mustang',2)).to.throw('No such model in the catalog!');
        });

     });
     describe('checking the budget',()=>{
it('costPerDay is not an integer',()=>{
    expect(()=>rentCar.checkBudget(1.2,2,50)).to.throw('Invalid input!');
})
it('days are not an integer',()=>{
    expect(()=>rentCar.checkBudget(1,2.3,50)).to.throw('Invalid input!');
});
it('budget is not an integer',()=>{
    expect(()=>rentCar.checkBudget(12,2,50.3)).to.throw('Invalid input!');
});
it('all are not an integer',()=>{
    expect(()=>rentCar.checkBudget(1.2,2.323,50.3)).to.throw('Invalid input!');
});
it('not a number costPerday',()=>{
    expect(()=>rentCar.checkBudget('1.2',223,503)).to.throw('Invalid input!');
});
it('days not a number',()=>{
    expect(()=>rentCar.checkBudget(12,'323',503)).to.throw('Invalid input!');
});
it('budget not a number',()=>{
    expect(()=>rentCar.checkBudget(12,2323,'50.3')).to.throw('Invalid input!');
});
it('all not a number',()=>{
    expect(()=>rentCar.checkBudget('12','2323','50.3')).to.throw('Invalid input!');
});
it('enough money',()=>{
    expect(rentCar.checkBudget(12,2,50)).to.be.equal(`You rent a car!`);
});
it('enough money barely',()=>{
    expect(rentCar.checkBudget(25,2,50)).to.be.equal(`You rent a car!`);
});
it('enough money 0',()=>{
    expect(rentCar.checkBudget(25,0,0)).to.be.equal(`You rent a car!`);
});
it('not enough money ',()=>{
    expect(rentCar.checkBudget(30000,4,1000)).to.be.equal('You need a bigger budget!');
});

     });
});

