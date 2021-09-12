'use strict';

function grouping_count(collection) {
  let arr = {};
  collection.forEach(elem => {
    if (Object.keys(arr).includes(elem.toString())) {
      arr[elem]++;
    } else {
      arr[elem] = 1;
    }
  });
  return arr;
}

module.exports = grouping_count;
