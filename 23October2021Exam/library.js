const library = {
    calcPriceOfBook(nameOfBook, year) {

        let price = 20;
        if (typeof nameOfBook != "string" || !Number.isInteger(year)) {
            throw new Error("Invalid input");
        } else if (year <= 1980) {
            let total = price - (price * 0.5);
            return `Price of ${nameOfBook} is ${total.toFixed(2)}`;
        }
        return `Price of ${nameOfBook} is ${price.toFixed(2)}`;
    },

    findBook: function(booksArr, desiredBook) {
        if (booksArr.length == 0) {
            throw new Error("No books currently available");
        } else if (booksArr.find(e => e == desiredBook)) {
            return "We found the book you want.";
        } else {
            return "The book you are looking for is not here!";
        }

    },
    arrangeTheBooks(countBooks) {
        const countShelves = 5;
        const availableSpace = countShelves * 8;

        if (!Number.isInteger(countBooks) || countBooks < 0) {
            throw new Error("Invalid input");
        } else if (availableSpace >= countBooks) {
            return "Great job, the books are arranged.";
        } else {
            return "Insufficient space, more shelves need to be purchased.";
        }
    }

};

const expect  = require('chai').expect;

describe('Tests for library',()=>{
    describe('calcPriceOfBook',()=>{
        it('the name is not a string',()=>{
            expect(()=>library.calcPriceOfBook(2,1222)).to.throw("Invalid input");
        });
        it('year is not a number',()=>{
            expect(()=>library.calcPriceOfBook('Brave new world','1222')).to.throw("Invalid input");
        });
        it('year is not an integer',()=>{
            expect(()=>library.calcPriceOfBook('Brave new world',12.333)).to.throw("Invalid input");
        });
        it('year is negative',()=>{
            expect(library.calcPriceOfBook('Brave new world',-12333)).to.equal(`Price of Brave new world is 10.00`);
        });
        it('year is below 1980',()=>{
            expect(library.calcPriceOfBook('Brave new world',1888)).to.equal(`Price of Brave new world is 10.00`);
        });
        it('year is 1980',()=>{
            expect(library.calcPriceOfBook('Brave new world',1980)).to.equal(`Price of Brave new world is 10.00`);
        });
        it('year is bigger than 1980',()=>{
            expect(library.calcPriceOfBook('Brave new world',2000)).to.equal(`Price of Brave new world is 20.00`);
        });
    });
    describe('findBook',()=>{
it('array length is 0',()=>{
expect(()=>library.findBook([],'1984')).to.throw("No books currently available");
});
it('array length is null',()=>{
    expect(()=>library.findBook('','1984')).to.throw("No books currently available");
    });
    it('found the book',()=>{
        expect(library.findBook(['2004', '1984', '3421'],'1984')).to.equal("We found the book you want.");
        });
        it('found the book2',()=>{
            expect(library.findBook(['1984'],'1984')).to.equal("We found the book you want.");
            });
            it('found the book with numbers',()=>{
                expect(library.findBook([1984],1984)).to.equal("We found the book you want.");
                });
        it('the book is not found',()=>{
            expect(library.findBook(['2004', '1984', '3421'],'Brave new world')).to.equal("The book you are looking for is not here!");
            });
    });

    describe('arrange books',()=>{
it('the count is not an integer',()=>{
expect(()=>library.arrangeTheBooks(1.2)).to.throw("Invalid input");
});
it('the count is below 0',()=>{
    expect(()=>library.arrangeTheBooks(-12)).to.throw("Invalid input");
    });
    it('is done',()=>{
        expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
        });
        it('is done 2',()=>{
            expect(library.arrangeTheBooks(21)).to.equal("Great job, the books are arranged.");
            });
            it('not enough space',()=>{
                expect(library.arrangeTheBooks(0)).to.equal("Great job, the books are arranged.");
                });
                it('not enough space 2',()=>{
                    expect(library.arrangeTheBooks(1000)).to.equal("Insufficient space, more shelves need to be purchased.");
                    });
    });
})