const {expect} = require('chai');
const Person = require('../problems/person')

describe('Person class', function () {

    let person, name, age;
    let person2, name2, age2;

    beforeEach(function() {
        name = 'Billy';
        age = 23;
        person = new Person (name, age);
        name2 = 'Jane'
        age2 = 34;
        person2 = new Person(name2, age2);
    });

    it('should take a name and age and set them as properties of the Person instance', function () {
        const empty = new Person();
        expect(empty).to.have.all.keys('name', 'age');
        expect(person.name).to.equal(name);
        expect(person.age).to.equal(age);
    })

    it("sayHello() should return a string of the person's name and a greeting", function() {
        const res = person.sayHello();
        expect(res).to.deep.equal(`Hello, ${person.name}!`)
    })

    it("vist(otherPerson) should return a string that the instance visited otherperson", function() {
        const res = person.visit(person2);
        expect(res).to.equal(`${person.name} visited ${person2.name}.`)
    })

    it("switchVisit(otherPerson) should will invoke the visit function of otherperson passing in the current instance", function () {
        const res = person.switchVisit(person2);
        expect(res).to.equal(`${person2.name} visited ${person.name}.`)
    })


    it('greetAll should take in array of Person instances and return an array with sayHello() called on each one', function () {
        const personArray = [person, person2];
        const res = Person.greetAll(personArray);
        expect(res).to.deep.equal([`Hello, ${person.name}!`, `Hello, ${person2.name}!`])
    
    })

    describe('update(obj)', function () {
        it ('should return a TypeError if an object is not passed in', function () {
            expect(() => person.update('string')).to.throw(TypeError);
            expect(() => person.update(24)).to.throw(TypeError);
            expect(() => person.update(['age', 'name'])).to.throw(TypeError);
        })
    
        it ('should accept an object with name and age properties and update that instances properties', function () {
            person.update(person2);
            expect(person.name).to.equal(person2.name);
            expect(person.age).to.equal(person2.age);
        })
    
        it('should throw a TypeError if object does not contain name or age properties', function () {
            expect(() => person.update({wrongkey: 'Bill', notit: 23})).to.throw(TypeError);
        })
    })

    describe('tryUpdate(obj)', function () {
        let copy;

        beforeEach(function () {
            copy = new Person (name, age);
        })

        it ('should return true if successful and update the object', function () {
            let res = person.tryUpdate(person2);
            expect(res).to.equal(true);
            expect(person.name).to.not.deep.equal(copy.name);
            expect(person.age).to.not.deep.equal(copy.name);
        })
    
        it ('should not throw an error if unsuccessful and return false instead', function () {
            let res = person.tryUpdate({wrongkey: 'Bill', notit: 23});
            expect(res).to.equal(false);
            expect(person).to.be.deep.equal(copy);
        })
    })

});


