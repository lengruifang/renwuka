'use strict';


function get_integer_interval_2(number_a, number_b) {
  let arr = [];
  if (number_a <= number_b) {
    for (let i = number_a; i <= number_b; i++) {
      if (i % 2 === 0) {
        arr.push(i);
      }
    }
  } else {
    for (let i = number_a; i >= number_b; i--) {
      if (i % 2 === 0) {
        arr.push(i);
      }
    }
  }

  return arr;
}

module.exports = get_integer_interval_2;
