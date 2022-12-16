const {expect, spy} = require ('chai');
const myMap = require('../problems/my-map')
const spies = require("chai-spies");
const chai = require('chai')
chai.use(spies);

describe('It should mimic the built in Array.map', function(){

    let arr = [1, 2, 3]
    let callback = el => el * 2;

    beforeEach(function() {
        arr = [1, 2, 3];
        callback = el => el * 2;
    });

    it ('should return an array with the callback applied to each element', function () {
        // const arr = [1, 2, 3];
        // const callback = el => el * 2;

        expect(myMap(arr, callback)).to.deep.equal([2, 4, 6]);
        expect(myMap(arr)).to.deep.equal([1, 2, 3]);
    });

    it ('should not mutate the original array', function() {
        myMap(arr, callback);
        expect(arr).to.deep.equal([1, 2, 3]);
    });

    it ('should not use the built-in Array.map function', function () {
        const spy = chai.spy.on(Array.prototype, 'map');
        myMap(arr, callback);
        expect(spy).to.have.not.been.called();
    })

    it ('the callback should be invoked once for each element', function () {
        const spyFunc = chai.spy(callback);
        myMap(arr, spyFunc);
        expect(spyFunc).to.have.been.called.exactly(arr.length)
    })
})