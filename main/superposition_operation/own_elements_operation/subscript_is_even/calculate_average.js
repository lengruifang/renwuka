'use strict';
var calculate_average = function(collection){
let even=collection.filter((value, index) =>{if(index%2!==0) return value} )
  return even.reduce((a,b)=>a+b)/even.length
};
module.exports = calculate_average;
