const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.filter = null;

if (!Array.prototype.filter) {
  Array.prototype.filter = function (cb) {
    const retArr = [];
    for (const key in this) {
      if (cb(this[key])) {
        retArr.push(this[key]);
      }
    }
    return retArr;
  };
}

const filteredArr = arr.filter((e) => e % 2 === 0);

console.log(filteredArr);
