'use strict';

function find_first_even(collection) {
  let i=0;
while (i<collection.length){
  if (collection[i]%2==0){
    break;
  }
  ++i;
}
return collection[i];
  //在这里写入代码
}

module.exports = find_first_even;

