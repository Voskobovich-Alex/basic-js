const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
/*function transform(arr) {
  if(!Array.isArray(arr)) throw Error("'arr' parameter must be an instance of the Array!");

  let result =[], 
      newArr = arr;
      strNext='--discard-next',
      strPrev='--discard-prev',
      strNextD='--double-next',
      strPrevD='--double-prev',
      disPrev = '',
      disNext = '',
      dubPrev = '',
      dubNext = '',
      flag=false;

      for (let i = 0; i < newArr.length; i++) {

        if(arr[i]==strNextD) result.push(arr[i+1]);
        else if(arr[i] ==strPrevD) result.push(arr[i-1]);

        if(arr[i]!=strNext) disNext = arr[i+1];
        else if(arr[i] ==strPrev) disPrev = arr[i-1];
      }

      console.log();

  /*    for (let i = 0; i < newArr.length; i++) {
        if(arr[i]==strNext) disNext = arr[i+1];
        else if(arr[i] ==strPrev) disPrev = arr[i-1];
        
        if(arr[i]==strNextD) dubNext = arr[i+1];
        else if(arr[i] ==strPrevD) dubPrev  = arr[i-1];
      } 
      if(dubNext || dubPrev){
        if(disPrev == dubNext ) result.push(dubNext);
      }
      console.log('DisN- '+disNext);
      console.log('DisP- '+disPrev);
     console.log('DubN- '+dubNext);
     console.log('DubP- '+dubPrev);

      for (let i = 0; i < newArr.length; i++) {
        if(
          arr[i]!=strNext &&  
          arr[i]!=strPrev && 
          arr[i]!=disPrev && 
          arr[i]!=disNext && 
          arr[i]!=strNextD && 
          arr[i]!=strPrevD
        ){
          if(dubNext ==arr[i]) result.push(dubNext);
          if(dubPrev ==arr[i]) result.push(dubPrev);
          if(dubNext && i==4){
            if(disPrev == dubNext ) result.push(dubNext);
          }
          //if(disNext == dubPrev) result.push(dubPrev);
          //if(disPrev == dubNext ) result.push(dubNext);
          
          result.push(arr[i]);
        } 
      } 
      filtered = result.filter(function (el) {
           if(el) return el;
      });

      console.log( filtered);
      return  filtered;*/
//}
function transform(arr) {
  if(!Array.isArray(arr)) throw Error("'arr' parameter must be an instance of the Array!");

  let result =[], 
      newArr = arr.slice(0);
      strNext='--discard-next',
      strPrev='--discard-prev',
      strNextD='--double-next',
      strPrevD='--double-prev';
    
      arr.forEach((elem, i) => {
        if(elem==strNext){
            if (i !== newArr.length - 1) newArr.splice(i+1, 1);
        }
        else if(elem==strPrev){
            if (i !== 0) newArr.splice(i-1, 1);
        }
        else if(elem==strNextD){
          if (i !== newArr.length - 1) newArr.splice(i+1, 0, newArr[i+1]);
        }
        else if(elem ==strPrevD){
          if (i !== 0) newArr.splice(i, 0, newArr[i-1]);
        }

      });
      result = newArr.filter(el => el!=strNext && el!=strPrev && el!=strNextD  && el!=strPrevD);
      return result;
}

module.exports = {
  transform
};
