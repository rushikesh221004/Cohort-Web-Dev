let arr = [1, 2, 3, 4, 5, 6]

Array.prototype.map = null

if(!Array.prototype.map) {
    Array.prototype.map = function(cb) {
        let resArr = []
        for(const index in this) {
            resArr.push(cb(this[index], index, this))
        }
        return resArr
    }
}

let newArr = arr.map((element, index, array) => array)
console.log(newArr)