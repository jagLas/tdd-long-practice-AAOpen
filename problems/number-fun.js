function returnsThree() {
  return 3;
}

function reciprocal(n) {

  // //checks for edge cases like inputs of 0 and undefined. No longer used in new spec.
  // if(n === 0) {
  //   return undefined;
  // } else if(n === undefined) {
  //   return 0;
  // }

  //returns the reciprocal if within specs range
  if (n >= 1 && n <= 1000000) {    
    return 1/n;
  }  else {
    throw TypeError();
  }
}

module.exports = {
  returnsThree,
  reciprocal
};