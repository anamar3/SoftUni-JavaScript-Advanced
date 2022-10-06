const assert = require('assert');
const flowerShop = require('./flowerShop.js');

describe('Flower Shop',()=>{
describe('calc Price Of Flowers',()=>{
it('it is not a string error', ()=>{
assert.throws(() => flowerShop.calcPriceOfFlowers(1,2,3), Error('Invalid input!'));
});
it('it is not a num1 error', ()=>{
    assert.throws(() => flowerShop.calcPriceOfFlowers('1','2',3), Error('Invalid input!'));
    });
    it('it is not a num2 error', ()=>{
        assert.throws(() => flowerShop.calcPriceOfFlowers('1',2,'3'), Error('Invalid input!'));
        });
        it('working', ()=>{
            assert.equal(flowerShop.calcPriceOfFlowers('rose',2,3), `You need $6.00 to buy rose!`);
            });
            // it('working pt2', ()=>{
            //     assert.equal(flowerShop.calcPriceOfFlowers('rose',2.0,3), `You need $6.00 to buy rose!`);
            //     });
});

describe('check Flowers Available', ()=>{
it('flower available',()=>{
assert.equal(flowerShop.checkFlowersAvailable('rose',['rose','tupil']), `The rose are available!`);
});
it('sold flower', ()=>{
assert.equal(flowerShop.checkFlowersAvailable('rose', ['tupil']), `The rose are sold! You need to purchase more!`)
});
});

describe('Sell Flowers', ()=>{
it('not an array', ()=>{
assert.throws(()=>flowerShop.sellFlowers('2',2), Error('Invalid input!'));
});
it('not a number', ()=>{
    assert.throws(()=>flowerShop.sellFlowers(['rose','white rose'],'2'), Error('Invalid input!'));
    });
    it('space bigger than length of array', ()=>{
        assert.throws(()=>flowerShop.sellFlowers(['rose','white rose'],40), Error('Invalid input!'));
        });
        it('space is negative', ()=>{
            assert.throws(()=>flowerShop.sellFlowers(['rose','white rose'],-2), Error('Invalid input!'));
            });
            it('working', ()=>{
                assert.equal(flowerShop.sellFlowers(['rose','white rose','black rose'],2), 'rose / white rose');
                });
                it('working pt3', ()=>{
                    assert.equal(flowerShop.sellFlowers(['rose'],0), '');
                    });
                    it('not working with empty arr', ()=>{
                        assert.throws(() => flowerShop.sellFlowers([],0), Error('Invalid input!'));
                        });
});
});