const cinema = require('./cinema.js');
const expect = require('chai').expect;

describe('cinema', () => {
    describe('showMovies', () => {
        
        it('no movies here', () => {
            expect(cinema.showMovies([])).to.be.equal('There are currently no movies to show.');
        });
        it('with matrix', () => {
            expect(cinema.showMovies([[3,6],[4,7],[5,8]]).to.be.equal('3,6, 4,7, 5,8'));
        });
  
        it('movies are here', () => {
            expect(cinema.showMovies(['Matrix', 'Top Gun 5', 'Maverick'])).to.be.equal('Matrix, Top Gun 5, Maverick');
        });
        it('movie is here', () => {
            expect(cinema.showMovies(['Matrix 3'])).to.be.equal('Matrix 3');
        });
    });

    describe('ticket price', () => {
        it('return price1', () => {
            expect(cinema.ticketPrice('Premiere')).to.be.equal(12.00);
           
        });
     
        it('return price2', () => {
            expect(cinema.ticketPrice('Normal')).to.be.equal(7.50);
           
        });
        it('return price3', () => {
            expect(cinema.ticketPrice('Discount')).to.be.equal(5.50);
           
        });
        it('it is wrong', () => {
            expect(() => cinema.ticketPrice('Invalid')).to.throw('Invalid projection type.');

        });
       
    
    });

    describe('swap seats in halls', () => {
       
        it('one seat', () => {
            expect(cinema.swapSeatsInHall(1.25,5)).to.be.equal( "Unsuccessful change of seats in the hall.");
        });
        it('second seat is and wrong', () => {
            expect(cinema.swapSeatsInHall(3.44, -3.3)).to.be.equal("Unsuccessful change of seats in the hall.");
        });
    
        it('oo', () => {
            expect(cinema.swapSeatsInHall(25, 5)).to.be.equal("Unsuccessful change of seats in the hall.");
        });
      
        it('first seat not a number', () => {
            expect(cinema.swapSeatsInHall(-5, 5)).to.be.equal("Unsuccessful change of seats in the hall.");
        });
      
        it('first seat is wrong', () => {
            expect(cinema.swapSeatsInHall(0, 5)).to.be.equal("Unsuccessful change of seats in the hall.");
        });
        it('second seat is more than 20', () => {
            expect(cinema.swapSeatsInHall(3, 3333)).to.be.equal("Unsuccessful change of seats in the hall.");
        });
        it('first seat is more than 20', () => {
            expect(cinema.swapSeatsInHall(9,0)).to.be.equal("Unsuccessful change of seats in the hall.");
        });
 
        it('second seat is the same as first seat', () => {
            expect(cinema.swapSeatsInHall(3, -3.3)).to.be.equal("Unsuccessful change of seats in the hall.");
        });
        it('second seat is the same asS first seat', () => {
            expect(cinema.swapSeatsInHall(3, 3)).to.be.equal("Unsuccessful change of seats in the hall.");
        });
        it('change is done', () => {
            expect(cinema.swapSeatsInHall(5, 10)).to.be.equal("Successful change of seats in the hall.");
        
        });
        it('last is done', () => {
            expect(cinema.swapSeatsInHall(5)).to.be.equal("Unsuccessful change of seats in the hall.");
        
        });
        it('change is doneE', () => {
            expect(cinema.swapSeatsInHall(19, 20)).to.be.equal("Successful change of seats in the hall.");
        });
        it('change is doneE', () => {
            expect(cinema.swapSeatsInHall()).to.be.equal("Unsuccessful change of seats in the hall.");
        });
        it('change is doneE', () => {
            expect(cinema.swapSeatsInHall('2','hi')).to.be.equal("Unsuccessful change of seats in the hall.");
        });
        it('ocaso', () => {
            expect(cinema.swapSeatsInHall({}, [-600])).to.be.equal("Unsuccessful change of seats in the hall.");
        });
    });
});
