const {expect} = require ('chai');
const myMap = require('../problems/my-map')

describe('It should mimic the built in Array.map', function(){

    it ('should return an array with the callback applied to each element', function () {
        const arr = [1, 2, 3];
        const callback = el => el * 2;

        expect(myMap(arr, callback)).to.deep.equal([2, 4, 6]);
        expect(myMap(arr)).to.deep.equal([1, 2, 3]);
    })
})