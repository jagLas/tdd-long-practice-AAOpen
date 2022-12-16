class Triangle {
    constructor(a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    hasValidSideLengths() {
        const sides = Object.values(this);
        sides.sort((a, b) => a - b);
        const twoSmallest = sides[0] + sides[1];

        if (twoSmallest > sides [2]) {
            return true;
        }
        
        return false;
    }

    validate() {
        if (this.hasValidSideLengths()) {
            this.isValid = true;
        } else {
            this.isValid = false;
        }
    }

    static getValidTriangles(...triangles) {
        triangles.forEach(triangle => triangle.validate());
        
        console.log(triangles)
        const validTriangles = triangles.filter(triangle => {
            if (triangle.isValid) {
                return true;
            } else {
                return false;
            }
        })
        console.log(validTriangles)
        return validTriangles;
    }
}

class Scalene {

}

class Isosceles {

}

module.exports = {
    Triangle,
    Scalene,
    Isosceles
}