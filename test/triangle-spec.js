const {expect} = require('chai');
const {Triangle, Scalene, Isosceles} = require('../problems/triangle')


let triangle, triangle2, invalidTri, invalidTri2;

describe('Triangle Class', function () {
    beforeEach( ()=> {

        triangle = new Triangle(2, 3, 4);
        triangle2 = new Triangle(10, 5, 6)
        invalidTri = new Triangle(5, 1, 2);
        invalidTri2 = new Triangle (0, 3, 3);

    })

    it('should set properites for all 3 sides', function () {
        expect(triangle.a).to.equal(2);
        expect(triangle.b).to.equal(3);
        expect(triangle.c).to.equal(4);
    })

    it('getPerimeter() should return the perimeter of the triangle', () => {
        let perimeter = triangle.getPerimeter();
        expect(perimeter).to.equal(9);
    });

    it('hasValidSideLengths() returns true if triangle is valid, and false if not', () => {
        expect(triangle.hasValidSideLengths()).to.be.true;
        expect(triangle2.hasValidSideLengths()).to.be.true;
        expect(invalidTri.hasValidSideLengths()).to.be.false;
        expect(invalidTri2.hasValidSideLengths()).to.be.false;
    });

    it('validate() should add an isValid property and set to true if a valid triangle', () => {
        expect(triangle.isValid).to.be.undefined;
        triangle.validate();
        expect(triangle.isValid).to.be.true;
    });

    it('getValidTriangles() take in an arbitrary number of triangles and returns all that are valid', () => {
        let res = Triangle.getValidTriangles(triangle, triangle2, invalidTri, invalidTri2);
        expect(res).to.deep.equal([triangle, triangle2]);
    })
})

describe ('Scalene Triangles', function () {

    beforeEach( ()=> {

        triangle = new Scalene(2, 3, 4);
        triangle2 = new Scalene(10, 5, 6)
        invalidTri = new Scalene(5, 1, 2);
        invalidTri2 = new Scalene(3, 3, 5);

    })

    it('should inherit from triangle class', () => {
        expect(triangle instanceof Triangle).to.be.true;
        expect(triangle instanceof Scalene).to.be.true;
    })

    it('should be initialized with 3 sides', () => {
        expect(triangle.a).to.equal(2);
        expect(triangle.b).to.equal(3);
        expect(triangle.c).to.equal(4);
    })
    it('should set the isValid property on construction', () => {
        expect(triangle.isValid).to.be.true;
        expect(invalidTri2.isValid).to.be.true;
        expect(invalidTri.isValid).to.be.false;
    })

    it('isScalene() should return true if it is a valid scalen triangle and false if not', function (){
        expect(triangle.isScalene()).to.be.true;
        expect(triangle2.isScalene()).to.be.true;
        expect(invalidTri.isScalene()).to.be.false;
        expect(invalidTri2.isScalene()).to.be.false;
    })

    it('validate() should add an isValidScalene property with a value of true if scalene and false if not', () => {
        expect(triangle.isValidScalene).to.be.undefined;
        expect(invalidTri2.isValidScalene).to.be.undefined;
        triangle.validate();
        invalidTri2.validate();
        expect(triangle.isValidScalene).to.be.true;
        expect(invalidTri2.isValidScalene).to.be.false;
    })
})