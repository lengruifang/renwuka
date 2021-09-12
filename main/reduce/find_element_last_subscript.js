'use strict';

function calculate_elements_sum(collection, element) {
  let arr;
  for (let i = collection.length - 1; i >= 0; i--) {
    if (collection[i] === element) {
      arr = i;
      break;
    }
  }
  return arr;
}

module.exports = calculate_elements_sum;
