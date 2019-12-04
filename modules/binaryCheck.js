
const binaryCheck = function (inputArray) {
    // check first value is valid
    let lastValue = inputArray[0]
    if (lastValue != 1 && lastValue != 0) return -1
    // initialize counters
    let currentSequenceLength = 1
    let longestSequence = 0
    // loop through array
    for (let i = 1; i < inputArray.length; i++) {
        // check this value is valid
        let thisValue = inputArray[i];
        if (thisValue != 1 && thisValue != 0) return -1
        // check if this value = last value
        if (thisValue == lastValue) {
            // if the current value is a match, increment the sequence length
            currentSequenceLength++
            // if current sequence is longer than longest yet set longest yet to this value
            if (currentSequenceLength > longestSequence) {
                longestSequence = currentSequenceLength
            }
            // this value is now the value to test against for the next index.
            lastValue = thisValue
        } else {
            lastValue = thisValue
            currentSequenceLength = 1
        }
        
    }return longestSequence
}
module.exports = binaryCheck;