const {expect} = require('chai');
const reverseString = require('../problems/reverse-string');

describe('Reverse String Function', function(){

    it('should take a string and reverse it', function(){
        const string = 'fun';
        expect(reverseString(string)).to.equal('nuf')
    })
})