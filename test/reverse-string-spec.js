const {expect} = require('chai');
const reverseString = require('../problems/reverse-string');

describe('Reverse String Function', function(){

    it('should take a string and reverse it', function(){
        const string = 'fun';
        expect(reverseString(string)).to.equal('nuf')
    })

    it('should throw a TypeError when input is not a string', function(){
        const num = 52;
        const array = ['s', 'd', 'f'];
        const object = {a: 2, b: 3}

        expect(() => reverseString(num)).to.throw(TypeError);
        expect(() => reverseString(array)).to.throw(TypeError);
        expect(() => reverseString(object)).to.throw(TypeError);
    })
})