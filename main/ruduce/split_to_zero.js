'use strict';

function spilt_to_zero(number, interval) {
  let a=[];
  let zero=interval;
  let i = number
    while(true){
      a.push(i);
      if (i<=0){
        break;
      }
      i=parseFloat((i-zero).toFixed(1));
    }
    return a;

  //在这里写入代码
}

module.exports = spilt_to_zero;
