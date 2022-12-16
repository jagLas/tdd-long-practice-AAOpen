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
        //extracts side lengths into array
        const sides = Object.values(this);

        //sorts array from smallest to largets
        sides.sort((a, b) => a - b);
        const twoSmallest = sides[0] + sides[1];

        //checks if valid
        if (twoSmallest > sides [2]) {
            return true;
        }
        
        return false;
    }

    validate() {
        //checks if valid and sets property
        if (this.hasValidSideLengths()) {
            this.isValid = true;
        } else {
            this.isValid = false;
        }
    }

    static getValidTriangles(...triangles) {
        //validates all triangles
        triangles.forEach(triangle => triangle.validate());

        //filters to ones that are valid
        const validTriangles = triangles.filter(triangle => {
            if (triangle.isValid) {
                return true;
            } else {
                return false;
            }
        })

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