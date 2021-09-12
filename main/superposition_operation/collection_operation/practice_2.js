'use strict';

function hybrid_operation_to_uneven(collection) {
let arr=collection.filter(elem=>elem%2!==0)
 return  arr.map(elem=>elem*3+2)
  //在这里写入代码
}

module.exports = hybrid_operation_to_uneven;

