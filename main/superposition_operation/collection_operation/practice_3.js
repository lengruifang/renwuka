'use strict';

function hybrid_operation_to_uneven(collection) {
  let arr=collection.filter(elem=>elem%2!==0)
  let money=arr.map(elem=>elem*3+5)
  return  money.reduce((a,b)=>a+b)
  //在这里写入代码
}

module.exports = hybrid_operation_to_uneven;

