module.exports = function reverseString(string) {
  if (typeof string !== 'string') {
    throw new TypeError('reverseString requires a string as an input');
  }

  //sets the string as an array and reverses it
  let reverseString = string.split('').reverse();
  //rejoins the array into a string
  reverseString = reverseString.join('');

  return reverseString;
};