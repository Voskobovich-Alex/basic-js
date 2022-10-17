const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n) {
  let max = 0,
      str = String(n),
      part = '',
      result = 0;

  for (let i = 0; i < str.length; i++) {
    part = str.substring(0, i);
    result = +part.concat(str.substring(i+1))
    
    if (result > max) max = result;
  }
  return max;
}

module.exports = {
  deleteDigit
};
