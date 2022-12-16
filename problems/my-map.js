function myMap(inputArray, callback) {
  if (typeof callback !== 'function') {
    return inputArray;
  }
  const mappedArray = [];
  inputArray.forEach(el => mappedArray.push(callback(el)));

  return mappedArray;
}

module.exports = myMap;