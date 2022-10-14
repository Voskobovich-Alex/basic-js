const { NotImplementedError } = require('../extensions/index.js');



/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */


function dateSample(sampleActivity) {
  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;

  let act = +sampleActivity,
      regexp = /(?<!-)\d+/g,
      result = 0,
      koeff = 0.693/HALF_LIFE_PERIOD;
      curTime = Math.log(MODERN_ACTIVITY/act)/koeff;

    if(typeof sampleActivity != 'string' || isNaN(curTime) || isNaN(act) || Math.sign(curTime) == -1 || act == 0) return false;

    sampleActivity.match(regexp) ? result = Math.ceil(curTime) : result =false;

    return result;
}


module.exports = {
  dateSample
};
