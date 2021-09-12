'use strict';

function find_last_even(collection) {
  let i=collection.length;
  while (i=>0){
    --i;
    if (collection[i]%2==0){
      break;
    }
  }
  return collection[i];
  //在这里写入代码
}

module.exports = find_last_even;
