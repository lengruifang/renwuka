'use strict';
var even_group_calculate_average = function(collection){
  let arr=[]
  let even=collection.filter((value, index) =>{
    if(index%2!==0) {if (value%2==0){return value}}})
  if (even[0]==undefined){
    arr.push(0)
  }else if (even.every(elem=>elem>=100)){
    arr.push(even.reduce((a,b)=>a+b)/even.length)
  }else {
    let even1 = even.filter(elem => {if ( elem<10){return elem}})
    let even2 = even.filter(elem => {if (elem<100){if (elem>=10){return elem}}})
    let even3 = even.filter(elem => {if( elem<1000){if (elem>=100){return elem}}})
    arr.push(even1.reduce((a, b) => a + b) / even1.length)
    arr.push(even2.reduce((a, b) => a + b) / even2.length)
    arr.push(even3.reduce((a, b) => a + b) / even3.length)
  }
  return arr
};
module.exports = even_group_calculate_average;
