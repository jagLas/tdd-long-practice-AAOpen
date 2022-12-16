const {expect} = require('chai');
const {Triangle, Scalene, Isosceles} = require('../problems/triangle')

let a, b, c;
let a2, b2, c2;
let a3, b3, c3;
let triangle, triangle2, triangle3, invalidTri, invalidTri2;

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
