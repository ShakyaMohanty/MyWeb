//NodeJS practice

const path = require('path');
// console.log(path)
var pathObj = path.parse(__filename)
// console.log(pathObj)

function isEven(num){
    if (num % 2 == 0){
        console.log('true')
        // return true
    }
    else{
        console.log('false')
        // return false
    }
}

// console.log(isEven(202))
module.exports = isEven;// this file will only extract isEven function and make it public

// const path = require('path');
var my_path = path.parse(__filename) // returns path object
console.log(my_path)
// console.log(path.parse(__dirname))
