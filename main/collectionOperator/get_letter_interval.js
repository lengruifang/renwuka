'use strict';

function get_letter_interval(number_a, number_b) {
  var code = new Array;
  if (number_a <= number_b) {
    for (let i = number_a; i <= number_b; i++) {
      code.push(String.fromCharCode("a".charCodeAt(0) - 1 + i));
    }
  } else {
    for (let i = number_a; i >= number_b; i--) {
      code.push(String.fromCharCode("a".charCodeAt(0) - 1 + i));
    }
  }
  return code;
}


module.exports = get_letter_interval;
