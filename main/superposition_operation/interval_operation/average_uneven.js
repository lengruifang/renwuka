'use strict';

function average_uneven(collection) {
  let arr=collection.filter(elem=>elem%2!==0)
  return  arr.reduce((a,b)=>a+b)/arr.length
  //在这里写入代码
}

module.exports = average_uneven;
