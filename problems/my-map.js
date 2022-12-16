function myMap(inputArray, callback) {
  //checks if callback is a function and returns original array if not
  if (typeof callback !== 'function') {
    return inputArray;
  }

  //applies the call to each element and pushes to new array
  const mappedArray = [];
  inputArray.forEach(el => mappedArray.push(callback(el)));

  return mappedArray;

}

module.exports = myMap;