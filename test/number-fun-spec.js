const {expect} = require ('chai');
const {returnsThree, reciprocal} = require('../problems/number-fun')

describe('returnsThree function', function(){
    it('should return a 3', function() {

        expect(returnsThree()).to.equal(3);
    })
})

describe('reciprocal(num)', function(){
    it('should take a number as an argument and return the reciprocal', function() {
        expect(reciprocal(3)).to.equal(1/3);
        expect(reciprocal(1)).to.equal(1);
        expect(reciprocal(1/5)).to.equal(5);
        expect(reciprocal(3/4)).to.equal(4/3);
    })

    it('should take 0 and return undefined', function() {
        expect(reciprocal(0)).to.equal(undefined);
    }) 

    it('should take undefined and return 0', function() {
        expect(reciprocal(undefined)).to.equal(0);
    })
})