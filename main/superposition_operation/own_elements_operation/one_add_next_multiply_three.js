'use strict';
function one_add_next_multiply_three(collection){
  let arr=collection
  let arr1=arr.map((value, index) => {
      return (value+arr[index+1])*3
  })
  arr1.pop()
  return arr1
}
module.exports = one_add_next_multiply_three;
