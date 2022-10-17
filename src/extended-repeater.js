const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {

  let nStr = String(str),
      repeatTimes = +options.repeatTimes,
      separator = options.separator,
      addition = options.addition,
      additionRepeatTimes = +options.additionRepeatTimes,
      additionSeparator = options.additionSeparator,
      result = "";
      console.log(addition);

  if(!repeatTimes) repeatTimes = 1;
  if(!separator) separator = "+";
  if(!additionRepeatTimes) additionRepeatTimes= 1;
  if(!additionSeparator) additionSeparator= "|";
  if(addition === undefined) addition= "";
  if(!addition && addition!=null) String(addition);


  for (let i = repeatTimes; i > 0; i--) {
    result += nStr;
    for (let j = additionRepeatTimes; j > 0; j--) {
      result += addition + (j - 1 > 0 ? additionSeparator : "");
    }
      result += i - 1 > 0 ? separator : "";
  }


  result += !additionRepeatTimes && addition ? addition : "";

  return result;

}
module.exports = {
  repeater
};
