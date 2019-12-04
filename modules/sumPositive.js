const sumPositive = function(inputArray){
    let sum = 0
    for (let number of inputArray){
        let n = Number(number)
        if (n > 0) sum += n
    }
    return sum
}
module.exports = sumPositive;