const array1 = [5, 12, 8, 130, 44];

Array.prototype.at = null

if(!Array.prototype.at) {
    Array.prototype.at = function(val) {
        return this[val]
    }
}

let elem = array1.at(4)

console.log(elem)