'use strict';

function average_to_letter(collection) {
let num=collection.length/2
return String.fromCharCode("a".charCodeAt(0) - 1 + Math.ceil((collection[num]+collection[num-1])/2))
  //在这里写入代码
}

module.exports = average_to_letter;

