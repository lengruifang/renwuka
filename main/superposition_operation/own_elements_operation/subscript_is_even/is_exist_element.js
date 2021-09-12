'use strict';
var is_exist_element = function(collection,element){
let even=collection.filter((value, index) => index%2==0)
  return even.includes(element)
};
module.exports = is_exist_element;
