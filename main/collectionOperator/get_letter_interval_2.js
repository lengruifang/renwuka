'use strict';

function get_letter_interval_2(num) {

  let codearr=[]
  if (num<28) {
    for (let j=num;j<=53;j++) {
      let code1;
      let code2="a".charCodeAt(0) - 1 + j;
      let i=0;
      while ("z".charCodeAt(0) < code2) {
        code2 -= 26;
        ++i;
      }
      code1 = String.fromCharCode("a".charCodeAt(0) - 1 + i)
      if (i<1){code1=code1.substr(1)}
      codearr.push(code1 + String.fromCharCode(code2))
    }
  }else if (num>28){
    for (let j=num;j>=20;j--) {
      let code1;
      let i=0;
      let code2="a".charCodeAt(0) - 1 + j;
      while ("z".charCodeAt(0) < code2) {
        code2 -= 26;
        ++i;
      }
      code1 = String.fromCharCode("a".charCodeAt(0) - 1 + i)
      if (i<1){code1=code1.substr(1)}
      codearr.push(code1 + String.fromCharCode(code2))
    }
  }else {
    let code1;
    let i=0;
    let code2="a".charCodeAt(0) - 1 + num;
    while ("z".charCodeAt(0) < code2) {
      code2 -= 26;
      ++i;
    }
    code1 = String.fromCharCode("a".charCodeAt(0) - 1 + i)
    codearr.push(code1 + String.fromCharCode(code2))
  }
  return codearr
}

module.exports = get_letter_interval_2;
// 53 52
// [ 'ba', 'bz', 'ay', 'ax', 'aw', 'av', 'au', 'at', 'as', 'ar', 'aq', 'ap', 'ao', 'an', 'am', 'al', 'ak', 'aj', 'ai', 'ah', 'ag', 'af', 'ae', 'ad', 'ac', 'ab', 'aa', 'z', 'y', 'x', 'w', 'v', 'u', 't' ] to equal
// [ 'ba', 'az', 'ay', 'ax', 'aw', 'av', 'au', 'at', 'as', 'ar', 'aq', 'ap', 'ao', 'an', 'am', 'al', 'ak', 'aj', 'ai', 'ah', 'ag', 'af', 'ae', 'ad', 'ac', 'ab', 'aa', 'z', 'y', 'x', 'w', 'v', 'u', 't' ].
