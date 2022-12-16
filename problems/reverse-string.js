module.exports = function reverseString(string) {
  let reverseString = string.split('');
  reverseString.reverse();
  reverseString = reverseString.join('');

  return reverseString;
};