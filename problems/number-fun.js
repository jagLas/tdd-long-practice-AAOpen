function returnsThree() {
  return 3;
}

function reciprocal(n) {

  //checks for edge cases like inputs of 0 and undefined

  if(n === 0) {
    return undefined;
  } else if(n === undefined) {
    return 0;
  }

  //returns the reciprocal
  return 1/n;
}

module.exports = {
  returnsThree,
  reciprocal
};