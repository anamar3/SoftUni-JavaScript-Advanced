
let {PaymentPackage} = require('./12-PaymentPackage');
const expect = require('chai').expect;

describe("PaymentPackage", function() {
    describe('constructor',function(){
        it("correct prams", ()=> {
            let payPack = new PaymentPackage('hey',66);
            expect(payPack.constructor).to.have.lengthOf(2);
        });
        it('name is a string',()=>{
            let payPack = new PaymentPackage('hey',66);
expect(typeof payPack.name).to.equal('string');
        });
        it('value is a num',()=>{
            let payPack = new PaymentPackage('hey',66);
expect(typeof payPack.value).to.equal('number');
        });
        it('VAT is set',()=>{
            let payPack = new PaymentPackage('hey',66);
expect( payPack.VAT).to.equal(20);
        });
        it('active',()=>{
            let payPack = new PaymentPackage('hey',66);
expect( payPack.active).to.equal(true);
        });
       
      
    });
  describe('getters and setters of name and value',function(){
    it('getter of name',()=>{
        let payPack = new PaymentPackage('gosho',66);
        expect(payPack.name).to.equal('gosho');
    });
    it('getter of value',()=>{
        let payPack = new PaymentPackage('gosho',66);
        expect(payPack.value).to.equal(66);
    });
    it('setter of value not working with string',()=>{
        let payPack = new PaymentPackage('gosho',66);
      
        expect(()=> payPack.value = '67').to.throw(Error,'Value must be a non-negative number');
    });
    it('setter of value not working with negative num',()=>{
        let payPack = new PaymentPackage('gosho',66);
      
        expect(()=> payPack.value = -67).to.throw(Error,'Value must be a non-negative number');
    });
    it('setter of value works',()=>{
        let payPack = new PaymentPackage('gosho',66);
      
        expect(payPack.value = 67).to.equal(payPack.value);
    });
    it('setter of name with num not a good idea',()=>{
        let payPack = new PaymentPackage('gosho',66);
        expect(()=>payPack.name = 67).to.throw(Error,'Name must be a non-empty string');
    });
    it('setter of name with null',()=>{
        let payPack = new PaymentPackage('gosho',66);
        expect(()=>payPack.name = '').to.throw(Error,'Name must be a non-empty string');
    });
    it('setter of name with string',()=>{
        let payPack = new PaymentPackage('gosho',66);
        expect(payPack.name = 'yoyoy').to.equal(payPack.name);
    });
  });
  describe('getters and setters of active and VAT',function(){
    it('setter of VAT not working with string',()=>{
        let payPack = new PaymentPackage('gosho',66);
      
        expect(()=> payPack.VAT = '67').to.throw(Error,'VAT must be a non-negative number');
    });
    it('setter of VAT not working with negative num',()=>{
        let payPack = new PaymentPackage('gosho',66);
      
        expect(()=> payPack.VAT = -67).to.throw(Error,'VAT must be a non-negative number');
    });
    it('setter of VAT works',()=>{
        let payPack = new PaymentPackage('gosho',66);
      
        expect(payPack.VAT = 67).to.equal(payPack.VAT);
    });
    it('setter of active doesnt work',()=>{
        let payPack = new PaymentPackage('gosho',66);
        expect(()=>payPack.active = 'true').to.throw(Error,'Active status must be a boolean');
    });
    it('setter of active doesnt work agaiin',()=>{
        let payPack = new PaymentPackage('gosho',66);
        expect(()=>payPack.active = 4324).to.throw(Error,'Active status must be a boolean');
    });
    it('setter of active workS',()=>{
        let payPack = new PaymentPackage('gosho',66);
        expect(payPack.active = false).to.equal(payPack.active);
    });
  });

  describe('To string',function(){
    it('returns it right',()=>{
        let payPack = new PaymentPackage('gosho',66);
        let output = [`Package: gosho`,
        `- Value (excl. VAT): 66`,
        `- Value (VAT 20%): 79.2`];
        expect(payPack.toString()).to.equal(output.join(`\n`));
    })
    it('returns it right with changed values',()=>{
        let payPack = new PaymentPackage('gosho',66);
        payPack.active = false;
        payPack.value = 10;
        payPack.VAT = 50;
        payPack.name = 'ne sum Gosho';
        let output = [`Package: ne sum Gosho (inactive)`,
        `- Value (excl. VAT): 10`,
        `- Value (VAT 50%): 15`];
        expect(payPack.toString()).to.equal(output.join(`\n`));
    })
  })
});
