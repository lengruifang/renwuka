'use strict';
function rank_by_two_large_one_small(collection){
let big=collection.filter(elem=>elem>=10)
  let arr1=collection;
  let arr2=arr1.filter(elem=>elem<10)
  arr2=arr2.sort().concat(big)
  let arr3=arr2.filter((value, index) => index%3==0)
  arr2=arr2.filter((value, index) => index%3!==0)
  let i=0;
  let j=2;
  while (j<arr2.length){
    arr2.splice(j,0,arr3[i])
    j+=3;++i;}
if (arr2.includes(arr3[arr3.length-1])==false){arr2.splice(arr2.length-1,0,arr3[arr3.length-1])}
  return arr2
}
module.exports = rank_by_two_large_one_small;
