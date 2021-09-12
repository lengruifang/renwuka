'use strict';

function even_to_letter(collection) {
  let two=collection.filter(elem=>elem%2==0)
  let abc=[]
  for (let i=0;i<two.length;i++) {
    abc.push(String.fromCharCode("a".charCodeAt(0) - 1 + two[i]))
  }
  return abc
  //在这里写入代码
}

module.exports = even_to_letter;
