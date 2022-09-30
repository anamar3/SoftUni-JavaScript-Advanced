const numberOperations = {
    powNumber: function (num) {
        return num * num;
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input < 100) {
            return 'The number is lower than 100!';
        } else {
            return 'The number is greater or equal to 100!';
        }
    },
    sumArrays: function (array1, array2) {

        const longerArr = array1.length > array2.length ? array1 : array2;
        const rounds = array1.length < array2.length ? array1.length : array2.length;

        const resultArr = [];

        for (let i = 0; i < rounds; i++) {
            resultArr.push(array1[i] + array2[i]);
        }

        resultArr.push(...longerArr.slice(rounds));

        return resultArr
    }
};

const expect = require('chai').expect;


describe('Tests',()=>{
describe('powNumber',()=>{
    it('should work with negative nums',()=>{
        expect(numberOperations.powNumber(-3)).to.equal(9);
    });
    it('should work with 0',()=>{
        expect(numberOperations.powNumber(0)).to.equal(0);
    });
    it('should work with not an integers',()=>{
        expect(numberOperations.powNumber(1.2)).to.equal(1.44);
    });
    it('should work with strings',()=>{
        expect(numberOperations.powNumber('3')).to.equal(9);
    });
    
});
describe('numberChecker',()=>{
it('is not a number',()=>{
    expect(()=>numberOperations.numberChecker('ImnotANumber')).to.throw('The input is not a number!');
});
it('I am a number',()=>{
    expect(numberOperations.numberChecker(2.93)).to.equal('The number is lower than 100!');
});
it('I am a number in a string',()=>{
    expect(numberOperations.numberChecker('99')).to.equal('The number is lower than 100!');
});
it('I am a number in an array',()=>{
    expect(numberOperations.numberChecker([99])).to.equal('The number is lower than 100!');
});
it('I am a number in an array',()=>{
    expect(numberOperations.numberChecker(-99)).to.equal('The number is lower than 100!');
});
it('I am a number greater than 100',()=>{
    expect(numberOperations.numberChecker(1000)).to.equal('The number is greater or equal to 100!');
});
it('I am a number equal to 100',()=>{
    expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
});
});
describe('sum arrays',()=>{
it('works',()=>{
expect(numberOperations.sumArrays([1,2],[1])).to.deep.equal([ 2, 2 ]);
});
it('works????',()=>{
    expect(numberOperations.sumArrays([1,3],[1, 1])).to.deep.equal([ 1+1, 4]);
    });
    it('works!!!',()=>{
        expect(numberOperations.sumArrays(['a','b'],['c', 'd','e'])).to.deep.equal(['ac','bd','e']);
        });
        it('Yaya',()=>{
            expect(numberOperations.sumArrays(['1','4'],['1', '1','1'])).to.deep.equal(['11','41','1']);
            });
            it('empty;((',()=>{
                expect(numberOperations.sumArrays([],[])).to.deep.equal([]);
                });
                it('One empty;((',()=>{
                    expect(numberOperations.sumArrays([],['2'])).to.deep.equal(['2']);
                    });
});
});

