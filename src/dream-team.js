const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(typeof members != 'object' || members == undefined || Array.isArray(members) == false) return false;
  const strArray = members.filter(element => typeof element === 'string' ? element.split(' ').join('') : '' );
  const result = strArray.sort().map(el => el.toUpperCase().split(' ').join('')[0]).sort().join('');

  return result;
}
createDreamTeam(Function)

module.exports = {
  createDreamTeam
};
