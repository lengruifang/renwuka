'use strict';

function calculate_elements_sum(collection, element) {
  let arr;
  for (let i = 0 ; i < collection.length; i++) {
    if (collection[i] === element) {
      arr = i;
      break;
    }
  }
  return arr;
}

module.exports = calculate_elements_sum;
