const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let cat = 0;

    matrix.map((elem, key) => {
      if(elem.includes("^^")) elem.map(el => el === '^^' ? ++cat : 0);
    });
    return cat;
}

module.exports = {
  countCats
};
