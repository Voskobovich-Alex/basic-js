const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(!date) return 'Unable to determine the time of year!';
  if( isNaN(Date.parse(date))) throw Error('Invalid date!');
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length)  throw Error('Invalid date!');

  let month = date.getMonth()+1,
    season = '';


  switch (true) {
    case month > 0 && month <= 2 || month==12:
      season = 'winter';
      break;
    case month >= 3 && month <= 5:
      season ='spring';
      break;
    case month >= 6 && month <= 8:
      season ='summer';
      break;
    case month >= 9 && month <=11:
      season ='autumn';
      break;
  }
   return season;
}
module.exports = {
  getSeason
};
