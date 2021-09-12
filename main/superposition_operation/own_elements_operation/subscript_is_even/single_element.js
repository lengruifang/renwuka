'use strict';
var single_element = function(collection){
let even=collection.filter((value, index) => index%2!==0)
let i=0;
let arr=[]
while (i<even.length) {
  let j=even.filter(elem=>elem==even[i])
  if (j.length==1) {
arr.push(even[i])
  }
  ++i
}
return arr
};
module.exports = single_element;
