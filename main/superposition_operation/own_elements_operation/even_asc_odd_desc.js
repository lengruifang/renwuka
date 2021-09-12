'use strict';
var even_asc_odd_desc = function(collection){
  let even=collection.filter(elem=>elem%2==0)
  let odd=collection.filter(elem=>elem%2!==0)
  let big=even.filter(elem=>elem>=10)
  let small=even.filter(elem=>elem<10)
  odd.sort().reverse()
return small.sort().concat(big.sort()).concat(odd)
};
module.exports = even_asc_odd_desc;
