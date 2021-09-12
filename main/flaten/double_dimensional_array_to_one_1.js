'use strict';

function double_to_one(collection) {
  let arr = [];
  collection.forEach(elem => {
    if (typeof(elem) === "number") {
      arr.push(elem);
    } else {
      arr.push(...elem)
    }
  });
  return arr;
}

module.exports = double_to_one;
