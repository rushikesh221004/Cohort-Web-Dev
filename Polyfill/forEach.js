const arr = ["a", "b", "c"];

Array.prototype.forEach = null;

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (cb) {
    for (const key in this) {
      cb(this[key], key, this);
    }
  };
}

arr.forEach((element, index, array) =>
  console.log(`Element: ${element}, Index: ${index}, Array: ${array}`)
);
