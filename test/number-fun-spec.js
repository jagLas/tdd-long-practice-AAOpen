const {expect} = require ('chai');
const {returnsThree, reciprocal} = require('../problems/number-fun')

describe('returnsThree function', function(){
    it('should return a 3', function() {

        expect(returnsThree()).to.equal(3);
    })
})

describe('reciprocal(num)', function(){
    it('should take a number as an argument and return the reciprocal if between 1 and 1,000,000 inclusive', function() {
        expect(reciprocal(3)).to.equal(1/3);
        expect(reciprocal(1)).to.equal(1);
        // expect(reciprocal(1/5)).to.equal(5);
        expect(reciprocal(4/3)).to.equal(3/4);
        expect(reciprocal(1000000)).to.equal(1/1000000);
    })

    // //older spec. Now depricated. Uncomment if returning to old spec
    // it('should take 0 and return undefined', function() {
    //     expect(reciprocal(0)).to.equal(undefined);
    // }) 

    // it('should take undefined and return 0', function() {
    //     expect(reciprocal(undefined)).to.equal(0);
    // })

    //new spec that limits input ranges
    it('should throw a TypeError if input is not between 1 to 1,000,000 inclusive', function() {
        expect(() => reciprocal(1/4)).to.throw(TypeError);
        expect(() => reciprocal(0)).to.throw(TypeError);
        expect(() => reciprocal(-30)).to.throw(TypeError);
        expect(() => reciprocal(1000001)).to.throw(TypeError);
    })
})