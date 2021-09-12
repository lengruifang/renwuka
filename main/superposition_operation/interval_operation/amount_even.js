'use strict';

function amount_even(collection) {
  let arr=collection.filter(elem=>elem%2==0)
  return  arr.reduce((a,b)=>a+b)
  //在这里写入代码
}

module.exports = amount_even;
