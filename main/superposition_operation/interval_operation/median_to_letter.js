'use strict';

function median_to_letter(collection) {
  let num = Math.ceil(collection.length / 2);
  let i=0;
  let code1;
  let code2="a".charCodeAt(0) - 1 + Math.ceil((collection[num]+ collection[num - 1]) / 2);
   while ("z".charCodeAt(0) < code2) {
     code2 -= 26
     ++i;
   }
  code1 = String.fromCharCode("a".charCodeAt(0) - 1 + i)
  return code1+String.fromCharCode(code2)
  //在这里写入代码
}

module.exports = median_to_letter;
